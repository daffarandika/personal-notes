import React from 'react'
import NoteAppHeader from './NoteAppHeader'
import NoteAppBody from './NoteAppBody'
import { getInitialData } from '../utils/index.js'

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData()
    };
    this.onArchiveClicked = this.onArchiveClicked.bind(this);
  };

  onArchiveClicked(id) {
    const noteIndex = this.state.notes.findIndex(n => n.id == id)
    this.setState((prevState) => {
      this.state.notes[noteIndex].archived = true
      return {
        notes: prevState.notes
      }
    })
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader />
        <NoteAppBody activeNotes={this.state.notes.filter((n) => n.archived === false)} id={this.props.id} onArchiveClicked={this.onArchiveClicked}/>
      </div>
    )
  }

}
