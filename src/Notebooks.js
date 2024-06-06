import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function Notebooks({
	addNoteBook,
	noteBooks,
	deleteNoteBook,
	setActiveNotebook,
	activeNoteBook,
}) {
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
						<h6>{noteBook.title}</h6>
					</div>
				))}
			</div>
		</div>
	);
}

export default Notebooks;
