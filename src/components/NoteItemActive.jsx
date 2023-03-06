import React from 'react'
import {showFormattedDate} from '../utils/index.js'

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="note-item">
          <div className="note-item__content">
            <p className="note-item__title">{this.props.title}</p>
            <p className="note-item__date">{showFormattedDate(this.props.createdAt)}</p>
            <p className="note-item__body">{this.props.body}</p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => this.props.onDeleteHandler(this.props.id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => this.props.onArchiveClicked(this.props.id)}>Arsipkan</button>
          </div>
      </div>
    )
  }
}
