import React from 'react'
import NoteSearch from './NoteSearch'

export default class NoteAppHeader extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="note-app__header">
        <h1>Notes</h1>
        <NoteSearch onSearchHandler={this.props.onSearchHandler}/>
      </div>
    )
  }
}
