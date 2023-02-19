import React from 'react'
import NoteAppHeader from './NoteAppHeader'
import NoteAppBody from './NoteAppBody'
import { getInitialData } from '../utils/index.js'

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      searchQuery: ''
    };
    this.onArchiveClicked = this.onArchiveClicked.bind(this);
    this.onUnarchiveClicked = this.onUnarchiveClicked.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.addNote = this.addNote.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  };

  onUnarchiveClicked(id) {
    const noteIndex = this.state.notes.findIndex(n => n.id == id)
    this.setState((prevState) => {
      this.state.notes[noteIndex].archived = false
      return {
        notes: prevState.notes
      }
    })
  }

  onArchiveClicked(id) {
    const noteIndex = this.state.notes.findIndex(n => n.id == id)
    this.setState((prevState) => {
      this.state.notes[noteIndex].archived = true
      return {
        notes: prevState.notes
      }
    })
  }

  addNote({title, body, createdAt, archived}) {
    this.setState((prevState) => {
      return {
        notes : [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived
          }
        ]
      }
    })
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter(n => n.id !== id)
      }
    });
  }

  onSearchHandler(searchQuery){
    this.setState((prevState) => {
      return {
        searchQuery: searchQuery
      }
    })
  }

  render() {
    var searchedNotes = this.state.notes.filter(
      (n) => {
        return (n.body.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1) ||
        (n.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1)
      }
    );
    if (this.state.searchQuery === '') {
      searchedNotes = this.state.notes;
    }
    return (
      <div className="note-app">
        <NoteAppHeader 
          onSearchHandler={this.onSearchHandler}
          />
        <NoteAppBody activeNotes={searchedNotes.filter((n) => n.archived === false)} 
          archivedNotes={searchedNotes.filter((n) => n.archived === true)} 
          id={this.props.id} 
          onArchiveClicked={this.onArchiveClicked}
          onUnarchiveClicked={this.onUnarchiveClicked}
          onDeleteHandler={this.onDeleteHandler}
          addNote={this.addNote} />
      </div>
    )
  }

}
