import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import React, { useState } from "react";

function Notebooks({
	addNoteBook,
	noteBooks,
	deleteNoteBook,
	setActiveNotebook,
	activeNoteBook,
	updateNoteBookTitle,
	selectNoteListToRender,
}) {
	const [editingNotebookId, setEditNotebookId] = useState(null);
	const [newTitle, setNewTitle] = useState("");

	const startEditing = (noteBook) => {
		setEditNotebookId(noteBook.id);
		setNewTitle(noteBook.title);
	};
	const saveTitle = (notebookId) => {
		updateNoteBookTitle(notebookId, newTitle);
		setEditNotebookId(null);
		setNewTitle("");
	};
	return (
		<div className="notebooks section">
			<div className="header">
				<button onClick={addNoteBook} className="addNotebook">
					<img src="newFolder.png" alt="plusIcon" width="20px" />
				</button>
				<button onClick={deleteNoteBook}>
					<img src="trash.png" alt="trashImg" className="trash" />
				</button>
			</div>

			<div className="noteBooksList">
				{noteBooks.map((noteBook) => (
					<div
						key={noteBook.id}
						onClick={() => {
							setActiveNotebook(noteBook.id);
						}}
						className={`notebook ${
							noteBook.id === activeNoteBook && "activeNotebook"
						}`}
					>
						{editingNotebookId === noteBook.id ? (
							<div>
								<input
									type="text"
									value={newTitle}
									onChange={(e) => setNewTitle(e.target.value)}
									onBlur={() => saveTitle(noteBook.id)}
									onKeyDown={(e) => {
										if (e.key === "Enter") saveTitle(noteBook.id);
										if (e.key === "Escape") setEditNotebookId(null);
									}}
								/>
							</div>
						) : (
							<div>
								<h6
									onDoubleClick={() => {
										startEditing(noteBook);
									}}
								>
									{noteBook.title}
								</h6>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Notebooks;
