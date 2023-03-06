import React from 'react'
import NoteItemActive from "./NoteItemActive";

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const notes = this.props.notes
    return (
      <div className="note-list__container">
        <h2>{this.props.title}</h2>
        <p style={{visibility: (notes.length === 0) ? "visible" : "hidden" }} 
          className="notes-list__empty-message">
            Tidak ada
        </p>
        <div className="notes-list">
          {
            notes.map((n) => 
              <NoteItemActive 
                {...n} 
                key={n.id} 
                id={n.id} 
                onInsertClicked={this.props.onInsertClicked} 
                onArchiveClicked={this.props.onArchiveClicked} 
                onDeleteHandler={this.props.onDeleteHandler}/>
            )
          }
        </div>
      </div>
    )
  }
}
