import React, { useState } from "react";
import ColorPalette from "./components/ColorPalette";
import CodeBox from "./components/CodeBox";
import Preview from "./components/Preview";

function App() {
  const [color, setColor] = useState("#000000");
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const htmlCode = `<div id="customDiv"></div>`;
  const cssCode = `#customDiv {
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background-color: ${color};
  box-shadow: 0px 0px 38px 2px #4DD0E1, inset -60px -28px 90px -37px #26C6DA;
}`;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5",
        color: darkMode ? "#f5f5f5" : "#1a1a1a",
        minHeight: "100vh"
      }}
    >
      <button onClick={toggleTheme} style={{ float: "right", margin: "10px" }}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>WebD Studio</h1>
      <ColorPalette onSelectColor={setColor} />
      <Preview color={color} />
      <CodeBox htmlCode={htmlCode} cssCode={cssCode} />
    </div>
  );
}

export default App;