import { useState } from "react";
import ReactMarkdown from "react-markdown";
function Main({ activeNote, editNotes }) {
	const [state, setState] = useState("edit");
	const editField = (key, value) => {
		editNotes({
			...activeNote,
			[key]: value,
			date: Date.now(),
		});
	};

	if (!activeNote) {
		return <div>No note selected</div>;
	}
	return (
		<div className="main section">
			<div className="mainButtons">
				<button className="edit" onClick={() => setState("edit")}>
					<img src="edit.png" alt="editButton" width="20px" />
				</button>
				<button className="done" onClick={() => setState("done")}>
					<img src="save.png" alt="saveButton" width="20px" />
				</button>
				<p className="updatedDate">
					{new Date(activeNote.date).toLocaleDateString("en-US", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>
			</div>

			{state === "done" ? (
				<div className="afterDone">
					<h1 className="doneTitle">{activeNote.title}</h1>
					<ReactMarkdown className="markdown-box" breaks>
						{activeNote.body}
					</ReactMarkdown>
				</div>
			) : (
				<div className="editPart">
					<input
						className="editTitle"
						type="text"
						id="title"
						autoFocus
						placeholder="Title"
						value={activeNote.title}
						onChange={(e) => editField("title", e.target.value)}
					/>
					<textarea
						className="editTextarea"
						id="noteBox"
						placeholder="Write your note"
						value={activeNote.body}
						onChange={(e) => editField("body", e.target.value)}
					/>
				</div>
			)}
		</div>
	);
}

export default Main;
