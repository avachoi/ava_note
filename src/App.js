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
	const addNote = () => {
		const newNote = {
			id: uuid(),
			title: "title",
			body: "noteBodybody",
			date: Date.now(),
		};
		setNotes([newNote, ...notes]);
	};
	return (
		<div className="app">
			<Notebooks />

			<Notes notes={notes} addNote={addNote} />

			<Main />
		</div>
	);
}

export default App;
