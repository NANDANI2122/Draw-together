import React from "react";

const palette = [
  "#000000", "#0D0D0D", "#1A1A1A", "#262626", "#333333",
  "#404040", "#4D4D4D", "#595959", "#666666", "#737373",
  "#808080", "#8C8C8C", "#999999"
];

const themes = {
  "Aqua Splash": ["#0097A7", "#00BCD4", "#4DD0E1", "#80DEEA"],
  "Bold Blues": ["#0D47A1", "#1976D2", "#42A5F5", "#90CAF9"],
  "Spring Fling": ["#FFA726", "#EF5350", "#AB47BC", "#FF7043"],
  "Earth & Sky": ["#4E342E", "#795548", "#90A4AE", "#B0BEC5"]
};

function ColorPalette({ onSelectColor }) {
  return (
    <div>
      <h2>Color Palette</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {palette.map((clr, i) => (
          <div
            key={i}
            onClick={() => onSelectColor(clr)}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: clr,
              cursor: "pointer",
              border: "1px solid #ccc"
            }}
          ></div>
        ))}
        <input
          type="color"
          onChange={(e) => onSelectColor(e.target.value)}
          style={{ width: "40px", height: "40px", border: "none" }}
        />
      </div>

      {Object.entries(themes).map(([label, colors], idx) => (
        <div key={idx}>
          <p><strong>{label}</strong></p>
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
            {colors.map((clr, i) => (
              <div
                key={i}
                onClick={() => onSelectColor(clr)}
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: clr,
                  cursor: "pointer",
                  border: "1px solid #ccc"
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorPalette;