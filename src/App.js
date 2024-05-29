import "./App.css";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	return (
		<div className="app">
			<Notebooks />

			<Notes />

			<Main />
		</div>
	);
}

export default App;
