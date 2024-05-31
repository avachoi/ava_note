import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function Notebooks() {
	return (
		<div className="notebooks section">
			<div className="header">
				<h3 className="heading">Notebooks</h3>

				<button>+</button>

				<button>-</button>
			</div>

			<h5>notebook112</h5>
		</div>
	);
}

export default Notebooks;
