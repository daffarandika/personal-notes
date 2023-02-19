import React from 'react'
import NoteSearch from './NoteSearch'

export default class NoteAppInput extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteBody: '',
      charLeft: 50
    }

    this.onNoteTitleChangeHandler = this.onNoteTitleChangeHandler.bind(this);
    this.onNoteBodyChangeHandler = this.onNoteBodyChangeHandler.bind(this);
    this.onInsertClicked = this.onInsertClicked.bind(this);
  }

  onNoteTitleChangeHandler(event) {
    this.setState((prevState) => {
      return {
        noteTitle: (event.target.value.length === 50) ? prevState.noteTitle: event.target.value,
        charLeft: 50 - event.target.value.length
      }
    })
  }

  onNoteBodyChangeHandler(event) {
    this.setState((prevState) => {
      return {
        noteBody: event.target.value
      }
    })
  }

  onInsertClicked(event) {
    event.preventDefault();
    this.props.addNote({
      title: this.state.noteTitle,
      body: this.state.noteBody,
      createdAt: new Date(),
      archived: false
    })
    this.setState(() => {
      return {
        noteTitle: '',
        noteBody: ''
      }
    })
  }

  render() {
    return(
      <form className="note-input" onSubmit={this.onInsertClicked}>
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.charLeft}</p>
        <input type="text" value={this.state.noteTitle} onChange={this.onNoteTitleChangeHandler}/>
        <textarea placeholder="hai" value={this.state.noteBody} onChange={this.onNoteBodyChangeHandler} rows="10"></textarea>
        <button type="submit">BUAT</button>
      </form>
    )
  }
}
