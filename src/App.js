import "./App.css";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import Main from "./Main";

function App() {
	return (
		<div className="App container">
			<Notebooks />
			<Notes />
			<Main />
		</div>
	);
}

export default App;
