import "./styles.css";
import { useState } from "react";
import { marked } from "marked";

export default function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**
  `);

  marked.setOptions({
    breaks: true
  });

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="wrapper">
      <textarea id="editor" onChange={handleChange} value={text}></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text)
        }}
      ></div>
    </div>
  );
}
