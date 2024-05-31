function Notes({ notes, addNote, deleteNote, activeNote, setActiveNote }) {
	return (
		<div className="notes section">
			<div className="header">
				<h2 className="heading">Notes</h2>
				<button onClick={addNote}>+</button>
				<button onClick={() => deleteNote(activeNote)}>-</button>
			</div>

			<div className="notesList">
				{notes.map((note) => (
					<div
						key={note.id}
						onClick={() => setActiveNote(note.id)}
						value={note.id}
						className={`${note.id === activeNote && "active"}`}
					>
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
