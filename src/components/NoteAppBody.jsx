import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const activeNotes = this.props.activeNotes;
    const archivedNotes = this.props.nonActiveNotes;
    return (
      <div className="note-app__body">
        <NoteInput />
        <h2>Catatan Aktif</h2>
        <p style={{visibility: 
            (activeNotes.length === 0) ? "visible" : "hidden"
          }} className="notes-list__empty-message">Tidak ada</p>
        <NoteList notes={activeNotes} id={this.props.id} onArchiveClicked={this.props.onArchiveClicked}/>
      </div>
    )
  }


}
