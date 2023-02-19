import React from 'react'
import NoteInput from './NoteInput'
import NoteListActive from './NoteListActive'
import NoteListArchived from './NoteListArchived'

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const activeNotes = this.props.activeNotes;
    const archivedNotes = this.props.archivedNotes;
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.props.addNote} />
        <NoteListActive title="Catatan Aktif" notes={activeNotes} id={this.props.id} onArchiveClicked={this.props.onArchiveClicked} onDeleteHandler={this.props.onDeleteHandler}/>
        <NoteListArchived title="Catatan Arsip" notes={archivedNotes} id={this.props.id} onUnarchiveClicked={this.props.onUnarchiveClicked} onDeleteHandler={this.props.onDeleteHandler}/>
      </div>
    )
  }


}
