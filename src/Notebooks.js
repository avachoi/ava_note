import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function Notebooks({
	addNoteBook,
	noteBooks,
	deleteNoteBook,
	setActiveNotebook,
	activeNotebook,
}) {
	console.log("noteBooks", noteBooks);
	console.log("activeNotebook", activeNotebook);
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
						onClick={() => setActiveNotebook(noteBook.id)}
						onClickCapture={() => console.log("clicked!!", activeNotebook)}
						className={`${noteBook.id === activeNotebook && "activeNotebook"}`}
					>
						<h6>{noteBook.title}</h6>
					</div>
				))}
			</div>
		</div>
	);
}

export default Notebooks;
