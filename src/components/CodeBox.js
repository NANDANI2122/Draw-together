import React from "react";

function CodeBox({ htmlCode, cssCode }) {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const download = (filename, content) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <h2>Generated HTML</h2>
      <pre><code>{htmlCode}</code></pre>
      <button onClick={() => copy(htmlCode)}>Copy HTML</button>
      <button onClick={() => download("webd-div.html", htmlCode)}>Download HTML</button>

      <h2>Generated CSS</h2>
      <pre><code>{cssCode}</code></pre>
      <button onClick={() => copy(cssCode)}>Copy CSS</button>
      <button onClick={() => download("webd-style.css", cssCode)}>Download CSS</button>
    </div>
  );
}

export default CodeBox;