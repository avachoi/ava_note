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
						<p>{note.body && note.body.substr(0, 10) + "..."}</p>
						<p>
							<small className="noteDate">
								{new Date(note.date).toLocaleDateString("en-US", {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</small>
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Notes;
