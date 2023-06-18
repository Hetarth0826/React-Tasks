import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const wordCount = text.trim().split(" ").filter(Boolean).length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
      style={{width:"40rem"}}
        rows={10}
        value={text}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
