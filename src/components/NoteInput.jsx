
import React from 'react'
import NoteSearch from './NoteSearch'

export default class NoteAppInput extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      charLeft: 50
    }

    this.onNoteTitleChangeHandler = this.onNoteTitleChangeHandler.bind(this)
  }

  onNoteTitleChangeHandler(event) {
    this.setState((prevState) => {
      return {
        noteTitle: (event.target.value.length === 50) ? prevState.noteTitle: event.target.value,
        charLeft: 50 - event.target.value.length
      }
    })
  }

  render() {
    return(
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.charLeft}</p>
        <input type="text" value={this.state.noteTitle} onChange={this.onNoteTitleChangeHandler}/>
        <textarea placeholder="hai" rows="10"></textarea>
        <button>BUAT</button>
      </div>
    )
  }
}
