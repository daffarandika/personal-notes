import React from 'react'
import NoteItemArchived from "./NoteItemArchived";
import { getInitialData } from '../utils/index.js'

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes
    const activeNotes = this.props.notes;
    const archivedNotes = this.props.nonActiveNotes;
    return (
      <div className="note-list__container">
        <h2>{this.props.title}</h2>
        <p style={{visibility: (activeNotes.length === 0) ? "visible" : "hidden" }} 
          className="notes-list__empty-message">
            Tidak ada
        </p>
        <div className="notes-list">
        {
          notes.map((n) => 
            <NoteItemArchived {...n} key={n.id} id={n.id} onInsertClicked={this.props.onInsertClicked} onUnarchiveClicked={this.props.onUnarchiveClicked} onDeleteHandler={this.props.onDeleteHandler} />
          )
        }
        </div>
      </div>
    )
  }
}
