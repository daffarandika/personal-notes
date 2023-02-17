import React from 'react'

export default class NoteSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="note-app__search">
        <input type="search" name="note-search" placeholder="Cari catatan..."/>
      </div>
    )
  }
}
