function Notes({ notes, addNote }) {
	return (
		<div className="notes">
			<h2>Notes</h2>
			<button onClick={addNote}>+</button>
			<button>-</button>
			<div className="notesList">
				{notes.map((note) => (
					<div>
						<h4>{note.title}</h4>
						<p>{note.body}</p>
						<p>
							<small>{note.date}</small>
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Notes;
