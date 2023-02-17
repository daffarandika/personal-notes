import React from 'react'
import NoteItem from "./NoteItem";
import { getInitialData } from '../utils/index.js'

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes
    return (
      <div className="notes-list">
      {
        notes.map((n) => 
          <NoteItem {...n} key={n.id} id={n.id} onArchiveClicked={this.props.onArchiveClicked}/>
        )
      }
      </div>
    )
  }
}
