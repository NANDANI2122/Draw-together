import React from "react";

function Preview({ color }) {
  return (
    <div style={{ margin: "30px 0" }}>
      <h2>Preview</h2>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "60px",
          backgroundColor: color,
          boxShadow: "0px 0px 38px 2px #4DD0E1, inset -60px -28px 90px -37px #26C6DA"
        }}
      ></div>
    </div>
  );
}

export default Preview;