import React, { useState } from 'react';
import Markdown from 'markdown-parser-react';
import './App.css';

function App() {
	const [markdown, setMarkdown] = useState('');
	const [autoUpdate, setAutoUpdate] = useState(true);
	const [renderedMarkdown, setRenderedMarkdown] = useState('');

	const handleInputChange = (event) => {
		setMarkdown(event.target.value);
		if (autoUpdate) {
			setRenderedMarkdown(event.target.value);
		}
	};

	const handleCheckboxChange = (event) => {
		setAutoUpdate(event.target.checked);
		if (event.target.checked) {
			setRenderedMarkdown(markdown);
		}
	};

	const handleButtonClick = () => {
		setRenderedMarkdown(markdown);
	};

	return (
		<div>
			<textarea id="editor" onChange={handleInputChange} />
			<div id="render-options">
				<input id="checkbox" type="checkbox" checked={autoUpdate} onChange={handleCheckboxChange} /> Auto update
				<button id="render-btn" onClick={handleButtonClick} disabled={autoUpdate}>Render</button>
			</div>
			<div id="preview">
				<Markdown content={renderedMarkdown} />
			</div>
		</div>
	);
}

export default App;
