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
				<h3 className="heading">Notebooks</h3>

				<button onClick={addNoteBook}>+</button>

				<button onClick={deleteNoteBook}>-</button>
			</div>

			<div className="noteBooksList">
				{noteBooks.map((noteBook) => (
					<div
						key={noteBook.id}
						onClick={() => setActiveNotebook(noteBook.id)}
						className={`${noteBook.id === activeNoteBook && "activeNotebook"}`}
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
