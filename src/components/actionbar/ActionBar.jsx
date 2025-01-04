import { Button } from "@mui/material";
import React from "react";

const ActionBar = ({ az, za, low, high }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="outlined" onClick={az}>
          A-Z
        </Button>
        <Button variant="outlined" onClick={za}>
          Z-A
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="outlined" onClick={low}>
          Low-To-High
        </Button>
        <Button variant="outlined" onClick={high}>
          High-To-Low
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
