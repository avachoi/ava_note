function Notes({ notes, addNote, deleteNote, activeNote, setActiveNote }) {
	const sortedNotes = notes.sort((a, b) => b.date - a.date);
	return (
		<div className="notes section">
			<div className="header">
				<h2 className="heading">Notes</h2>
				<button onClick={addNote}>+</button>
				<button onClick={() => deleteNote(activeNote)}>-</button>
			</div>

			<div className="notesList">
				{sortedNotes.map((note) => (
					<div
						key={note.id}
						onClick={() => setActiveNote(note.id)}
						value={note.id}
						className={`note ${note.id === activeNote && "activeNote"}`}
					>
						<h6 className="previewTitle">{`${
							note.title === "" ? "new note" : note.title
						}`}</h6>
						<p className="previewBody">
							{note.body && note.body.substr(0, 20) + "..."}
						</p>
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
