import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false); //id

	const addNote = () => {
		const newNote = {
			id: uuid(),
			title: "title",
			body: "body",
			date: Date.now(),
		};
		setNotes([newNote, ...notes]);
	};
	const deleteNote = (idToDeleteNote) => {
		setNotes(notes.filter((note) => note.id !== idToDeleteNote));
	};

	const selectNote = () => {
		let selectedNote = notes.find((note) => note.id === activeNote);
		return selectedNote;
	};

	const editNotes = (editedNote) => {
		let editiedNotes = notes.map((note) => {
			if (note.id === activeNote) {
				return editedNote;
			}
			return note;
		});
		setNotes(editiedNotes);
		console.log("notes", notes);
	};

	return (
		<div className="app">
			<Notebooks />

			<Notes
				notes={notes}
				addNote={addNote}
				deleteNote={deleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>

			<Main activeNote={selectNote()} editNotes={editNotes} />
		</div>
	);
}

export default App;
