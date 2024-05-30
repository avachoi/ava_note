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
	const [activeNote, setActiveNote] = useState(false);

	const addNote = () => {
		const newNote = {
			id: uuid(),
			title: "title",
			body: "noteBodybody",
			date: Date.now(),
		};
		setNotes([newNote, ...notes]);
	};
	const deleteNote = (idToDeleteNote) => {
		setNotes(notes.filter((note) => note.id !== idToDeleteNote));
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

			<Main />
		</div>
	);
}

export default App;
