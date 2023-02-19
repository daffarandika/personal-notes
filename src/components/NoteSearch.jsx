import React from 'react'

export default class NoteSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
    this.onSearchChangedHandler = this.onSearchChangedHandler.bind(this)
  }

  onSearchChangedHandler(event) {
    this.props.onSearchHandler(event.target.value);
    this.setState((prevState) => {
      return{
        searchQuery: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="note-app__search">
        <input type="search" name="note-search" value={this.state.searchQuery} onChange={this.onSearchChangedHandler} placeholder="Cari catatan..."/>
      </div>
    )
  }
}
