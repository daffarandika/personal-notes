import React from 'react'
import NoteInput from './NoteInput'

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteInput />
      </div>
    )
  }


}
