import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const Input = ({ label }: { label: string }) => {
  const [val, setVal] = useState("");

  return (
    <TextField
      label={label}
      variant="outlined"
      style={{ width: "100%", marginBottom: "16px" }}
      onChange={(e) => setVal(e.target.value)}
      value={val}
    />
  );
};

export default Input;
