import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function Notebooks({ addNoteBook, Notebooks }) {
	return (
		<div className="notebooks section">
			<div className="header">
				<h3 className="heading">Notebooks</h3>

				<button onClick={addNoteBook}>+</button>

				<button>-</button>
			</div>

			<div className="noteBooksList">
				{noteBooks.map((noteBook) => (
					<div></div>
				))}
			</div>
			<h6>All notes</h6>
			<h6>coding</h6>
			<h6>deleted</h6>
		</div>
	);
}

export default Notebooks;
