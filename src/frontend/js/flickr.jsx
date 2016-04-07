const React = require('react')
const { flickrSearch } = require('./model')

module.exports = React.createClass({
  displayName: 'Flikr',

  // getInitialState ::{ term :: String, results :: [URL] }
  getInitialState() {return {term: '', results: []} },

  //termChanged :: Event -> State Term
  termChanged({currentTarget: t}) {this.setState({term: t.value})},

  //updateResults :: Event -> State Results
  updateResults(xs) { this.setState({results: xs}) },

  //termChanged :: Event -> ?
  searchClicked(_) { flickrSearch(this.state.term).fork( this.props.showError, this.updateResults ) },

  render() {
    return (
      <div id="flickr">
        <input onChange={this.termChanged}/>
        <button onClick={this.searchClicked}>Search</button>
        <div id="results"> {this.state.results} </div>
      </div>
    );
  }
});
