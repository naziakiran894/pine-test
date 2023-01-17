import * as React from "react";
import Button from "@mui/material/Button";


export default function DisableElevation({ title,type,onClick }) {
  return (
    <Button
      variant="contained"
      type={type}
      onClick={onClick}
      disableElevation
      style={{
        width: "360px",
        padding: "15px",
        height: "58px",
        margin: "10px 10px 0px 50px",
      }}
    >
      {title}
    </Button>
  );
}
