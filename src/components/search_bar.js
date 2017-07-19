import React, { Component } from 'react';

// The Process
// user types into search bar
// do an api call
// show results in right bar

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search for videos" />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
