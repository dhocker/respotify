import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.getAlbums(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className="col-md-12" style={SearchBar.styles.div}>
        <h3>Search for an Artist</h3>
        <input
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={SearchBar.styles.input}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getAlbums: React.PropTypes.func.isRequired,
};

SearchBar.styles = {
  div: {
    margin: 30,
    textAlign: 'left',
  },
  input: {
    width: '40%',
  },
};

export default SearchBar;
