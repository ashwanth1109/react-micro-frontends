# Micro Frontends in React

Live Demo: https://dnsiwzptduezx.cloudfront.net/

Repo used during talk: https://github.com/ashwanth1109/mfe-talk

## How to add a new MFE to repo?

- Run `npm run mfegen dashboard 8084`
- Add new entry `webpack.dev.js` in `container`

```
dashboard: "dashboard@http://localhost:8084/remoteEntry.js"
```

- Add new entry in `webpack.prod.js` in `container`

```
dashboard: `dashboard@${domain}/dashboard/remoteEntry.js`
```

- Add your entry to `.github/workflows/cdk-deploy.yml`

```
aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "..." "/dashboard/remoteEntry.js"
```

- Before step to build `deploy`, add build step for your module:

```
     - name: Install dashboard dependencies
        run: npm install
        working-directory: dashboard

      - name: Build dashboard dist
        run: npm run build
        working-directory: dashboard
```

- Add deployment of your assets to cdk code:

```
    new BucketDeployment(this, "DeployDashboardAssets", {
      destinationBucket,
      sources: [Source.asset("../dashboard/dist")],
      destinationKeyPrefix: "dashboard/",
      prune: false,
    });
```
