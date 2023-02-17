import React from 'react'

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
            <p className="note-item__date">{this.props.date}</p>
            <p className="note-item__body">{this.props.body}</p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button">Delete</button>
            <button className="note-item__archive-button" onClick={() => this.props.onArchiveClicked(this.props.id)}>Archive</button>
          </div>
      </div>
    )
  }
}
