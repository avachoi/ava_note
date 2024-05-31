function Main({ activeNote, editNotes }) {
	const editField = (key, value) => {
		editNotes({
			...activeNote,
			[key]: value,
			date: Date.now(),
		});
	};

	if (!activeNote) {
		return <div>No note selected</div>;
	}
	return (
		<div className="main col-7">
			<p>Last edited on 3/8/24 6:27pm</p>
			<div className="mainButtons">
				<button className="edit">edit</button>
				<button className="done">done</button>
			</div>

			<input
				type="text"
				id="title"
				autoFocus
				placeholder="Title"
				value={activeNote.title}
				onChange={(e) => editField("title", e.target.value)}
			/>
			<textarea
				id="noteBox"
				placeholder="Write your note"
				value={activeNote.body}
				onChange={(e) => editField("body", e.target.value)}
			/>

			<div className="afterDone">
				<h1 className="doneTitle">{activeNote.title}</h1>
				<div className="doneBody">{activeNote.body}</div>
			</div>
		</div>
	);
}

export default Main;
