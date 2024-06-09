import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	const [notes, setNotes] = useState(
		localStorage.notes ? JSON.parse(localStorage.notes) : []
	);
	const [activeNote, setActiveNote] = useState(false); //id

	const allNotes = {
		id: uuid(),
		title: "All notes",
		list: notes,
	};
	const deleted = {
		id: uuid(),
		title: "deleted",
		list: [],
	};
	const [noteBooks, setNoteBooks] = useState([allNotes, deleted]);
	const [activeNoteBook, setActiveNotebook] = useState(false); //id

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const addNote = () => {
		const newNote = {
			id: uuid(),
			title: "",
			body: "",
			date: Date.now(),
		};
		const updatedNote = [newNote, ...notes];
		setNotes(updatedNote);
		setActiveNote(newNote.id);
	};
	const deleteNote = (idToDeleteNote) => {
		setNotes(notes.filter((note) => note.id !== idToDeleteNote));
	};

	const selectNote = () => {
		let selectedNote = notes.find((note) => note.id === activeNote);
		return selectedNote;
	};
	const selectNoteBook = () => {
		let selectedNotBook = noteBooks.find(
			(notebook) => notebook.id === activeNoteBook
		);
		return selectedNotBook;
	};

	const editNotes = (editedNote) => {
		let editiedNotes = notes.map((note) => {
			if (note.id === activeNote) {
				return editedNote;
			}
			return note;
		});
		setNotes(editiedNotes);
	};
	const addNoteBook = () => {
		const newNoteBook = {
			id: uuid(),
			title: "new notebook",
			list: [],
		};
		const updatedNotebooks = [newNoteBook, ...noteBooks];
		setNoteBooks(updatedNotebooks);
		setActiveNotebook(newNoteBook.id);
	};
	const deleteNoteBook = () => {
		setNoteBooks(
			noteBooks.filter((notebook) => notebook.id !== activeNoteBook)
		);
	};
	const updateNoteBookTitle = (id, newTitle) => {
		setNoteBooks(
			noteBooks.map((notebook) =>
				notebook.id === id ? { ...notebook, title: newTitle } : notebook
			)
		);
	};

	return (
		<div className="app">
			<h3 className="appName">Ava Note</h3>
			<div className="content">
				<Notebooks
					addNoteBook={addNoteBook}
					noteBooks={noteBooks}
					deleteNoteBook={deleteNoteBook}
					activeNoteBook={activeNoteBook}
					setActiveNotebook={setActiveNotebook}
					updateNoteBookTitle={updateNoteBookTitle}
				/>

				<Notes
					notes={notes}
					addNote={addNote}
					deleteNote={deleteNote}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
				/>

				<Main activeNote={selectNote()} editNotes={editNotes} />
			</div>
		</div>
	);
}

export default App;
