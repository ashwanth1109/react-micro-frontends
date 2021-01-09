import * as yargs from "yargs";
import * as fs from "fs-extra";
import * as nodeFs from "fs";
import * as cp from "child_process";
import * as path from "path";

const { writeFile, readFile } = nodeFs.promises;

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

(async () => {
  try {
    // Usage: npm run mfegen module port
    // Example: npm run mfegen dashboard 8084
    const moduleName = `${yargs.argv._[0]}`;
    const modulePath = `/${moduleName}`;
    const port = `${yargs.argv._[1]}`;
    console.log(`Generating micro-frontend at path: ${modulePath}`);
    const cwd = path.resolve(__dirname, `..${modulePath}`);

    const dirExists = fs.existsSync(`.${modulePath}`);

    if (dirExists) {
      throw new Error("Package already seems to exist!");
    }

    fs.mkdirSync(cwd);

    const devDeps = [
      "@babel/core@7.12.10",
      "@babel/preset-react@7.12.10",
      "@babel/preset-typescript@7.12.7",
      "@types/node@14.14.20",
      "@types/react@17.0.0",
      "@types/react-dom@17.0.0",
      "babel-loader@8.2.2",
      "html-webpack-plugin@4.5.1",
      "ts-node@9.1.1",
      "typescript@4.1.3",
      "webpack@5.11.1",
      "webpack-cli@4.3.1",
      "webpack-dev-server@3.11.1",
      "webpack-merge@5.7.3",
    ];

    // `react-router-dom` and `rxjs` need to be manually installed
    const deps = [
      "react@17.0.1",
      "react-dom@17.0.1",
      "@emotion/react@11.1.4",
      "@emotion/styled@11.0.0",
      "@material-ui/core@4.11.2",
    ];

    cp.spawnSync(
      `npm init -y && npm i -D ${devDeps.join(" ")} && npm i ${deps.join(" ")}`,
      {
        cwd,
        shell: true,
        stdio: "inherit",
      }
    );

    const data = fs.readFileSync(`.${modulePath}/package.json`);
    const dataAsString = data.toString().replace(/\^/g, "");
    const packageJson = JSON.parse(dataAsString);
    delete packageJson.scripts.test;
    packageJson.scripts.start = "webpack serve --config webpack.dev.js";
    packageJson.scripts.build = "webpack --config webpack.prod.js";

    const readPromises: Promise<Buffer>[] = [
      readFile("scripts/webpack-common"),
      readFile("scripts/webpack-dev"),
      readFile("scripts/webpack-prod"),
      readFile("scripts/ts-config"),
      readFile("scripts/index-html"),
      readFile("scripts/bootstrap"),
      readFile("scripts/app"),
    ];

    const files = await Promise.all(readPromises);
    const outputFiles = [];

    for (const file of files) {
      let content = file.toString();
      content = content.replace(/__PORT_CONFIG__/g, port);
      content = content.replace(/__MODULE_NAME__/g, moduleName);
      content = content.replace(
        /__MODULE_NAME_CAPITALIZED__/g,
        capitalizeFirstLetter(moduleName)
      );
      outputFiles.push(content);
    }

    fs.ensureDirSync(`.${modulePath}/public`);
    fs.ensureDirSync(`.${modulePath}/src`);

    const writePromises: Promise<void>[] = [
      writeFile(
        `.${modulePath}/package.json`,
        JSON.stringify(packageJson, null, 2)
      ),
      writeFile(`.${modulePath}/webpack.common.js`, outputFiles[0]),
      writeFile(`.${modulePath}/webpack.dev.js`, outputFiles[1]),
      writeFile(`.${modulePath}/webpack.prod.js`, outputFiles[2]),
      writeFile(`.${modulePath}/tsconfig.json`, outputFiles[3]),
      writeFile(`.${modulePath}/public/index.html`, outputFiles[4]),
      writeFile(`.${modulePath}/src/index.tsx`, 'import("./bootstrap");\n'),
      writeFile(`.${modulePath}/src/bootstrap.tsx`, outputFiles[5]),
      writeFile(`.${modulePath}/src/App.tsx`, outputFiles[6]),
    ];

    await Promise.all(writePromises);
  } catch (e) {
    console.error(e);
  }
})();
