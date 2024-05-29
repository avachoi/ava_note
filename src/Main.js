function Main() {
	return (
		<div className="main col-7">
			<p>Last edited on 3/8/24 6:27pm</p>
			<div className="mainButtons">
				<button className="edit">edit</button>
				<button className="done">done</button>
			</div>

			<input type="text" id="title" autoFocus placeholder="Title" />
			<textarea id="noteBox" placeholder="Write your note" />
		</div>
	);
}

export default Main;
