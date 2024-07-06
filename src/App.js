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
	const [deleted, setDeleted] = useState(
		localStorage.deleted
			? JSON.parse(localStorage.deleted)
			: {
					id: uuid(),
					title: "deleted",
					list: [],
			  }
	);

	const allNotes = {
		id: uuid(),
		title: "All notes",
		list: notes,
	};

	const [noteBooks, setNoteBooks] = useState(
		localStorage.noteBooks
			? JSON.parse(localStorage.noteBooks)
			: [allNotes, deleted]
	);
	const [activeNoteBook, setActiveNotebook] = useState(false); //id

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);
	useEffect(() => {
		localStorage.setItem("noteBooks", JSON.stringify(noteBooks));
	}, [noteBooks]);
	useEffect(() => {
		localStorage.setItem("deleted", JSON.stringify(deleted));
		console.log("deleted", deleted);
	}, [deleted]);

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
		let deletedNote = notes.find((note) => note.id === idToDeleteNote);
		let updatedDeletedList = [...deleted.list, deletedNote];
		setDeleted({ ...deleted, list: updatedDeletedList });
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
		<div className="body">
			<div className="app">
				<div className="app_header">
					<div className="appName">
						<img src="logo3.png" width="30px" alt="logo" />
						<span className="logoText">Ava Note</span>
					</div>
					<div className="search">
						<img src="mag.png" width="20px" />
						Search
					</div>
					<div className="user">
						<img src="lightUser.png" width="30px" alt="user_image" />
						<span>Jennifer Gardener</span>
					</div>
				</div>
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
		</div>
	);
}

export default App;
