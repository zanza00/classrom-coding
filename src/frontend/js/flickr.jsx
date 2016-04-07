const React = require('react')
const { flickrSearch } = require('./model')

module.exports = React.createClass({
  displayName: 'Flikr',

  // getInitialState ::{ term :: String }
  getInitialState() {return {term: ''}},

  //termChanged :: Event -> State Term
  termChanged({currentTarget: t}) {this.setState({term: t.value})},

  //termChanged :: Event -> ?
  searchClicked(_) { flickrSearch(this.state.term).fork(this.props.showError, (x) => console.log(x)) },

  render() {
    return (
      <div id="flickr">
        <input onChange={this.termChanged}/>
        <button onClick={this.searchClicked}>Search</button>
        <div id="results"></div>
      </div>
    );
  }
});
