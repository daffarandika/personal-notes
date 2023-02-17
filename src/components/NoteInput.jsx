
import React from 'react'
import NoteSearch from './NoteSearch'

export default class NoteAppHeader extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input type="text" name="" value="" />
        <textarea placeholder="hai" rows="10"></textarea>
        <button type="">BUAT</button>
      </div>
    )
  }
}
