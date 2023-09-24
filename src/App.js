import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({
	breaks: true,
});

function App() {

	const initialMarkdown = `# Heading(H1)
  ## Sub Heading(H2)
  [Link](https://google.com)
  \`Inline code\`
  \`\`\`
  Code block
  \`\`\`
  - List item
  > Blockquote
  ![Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUJKXekIequKq9v9gmAGXNTdjyJ5WGZSMYxrBMBn2&s)
  **Bolded text**`;

	const [markdown, setMarkdown] = useState(initialMarkdown);
	const [autoUpdate, setAutoUpdate] = useState(true);
	const [renderedMarkdown, setRenderedMarkdown] = useState(marked(initialMarkdown));

	const handleInputChange = (event) => {
		setMarkdown(event.target.value);
		if (autoUpdate) {
			setRenderedMarkdown(marked(event.target.value));
		}
	};

	const handleCheckboxChange = (event) => {
		setAutoUpdate(event.target.checked);
		if (event.target.checked) {
			setRenderedMarkdown(marked(markdown));
		}
	};

	const handleButtonClick = () => {
		setRenderedMarkdown(marked(markdown));
	};

	const handleClearClick = () => {
		setMarkdown('');
		setRenderedMarkdown('');
	};

	return (
		<div id="wrapper">
			<div id="editor-wrapper">

				<span className="heading roboto"> <h2>Markdown Editor</h2></span>

				<textarea id="editor" onChange={handleInputChange} value={markdown} />
				
				<div id="render-options">
					<span id="checkbox">
						<input type="checkbox" checked={autoUpdate} onChange={handleCheckboxChange} />
						<span>Auto update</span>
					</span>
					<button id="clear-btn" onClick={handleClearClick}>Clear</button>
					<button id="render-btn" onClick={handleButtonClick} disabled={autoUpdate}>Render</button>
				</div>
			</div>
			<div id="preview-wrapper">
				<span className="heading roboto" style={{ color: "#9B6FDC" }}> <h2>Markdown Preview</h2></span>
				<hr />
				<div id="preview" dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
			</div>
		</div>
	);
}

export default App;
