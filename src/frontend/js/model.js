const Task = require('data.task')
const {getJSON} = require('jquery')
const {compose, replace, prop, map} = require('ramda')


const Http = {
  // get -> Task Error JSON
  get: (url) => new Task((rej,res) => getJSON(url).error(rej).done(res))
}

const Url = String

const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8425bb55f2c56baebbde2f8c980189c5&tags={TAGS}&extras=url_s&format=json&jsoncallback=?'

//makeUrl :: String -> Url
const makeUrl = (t) => replace('{TAGS}', t, baseUrl)

//flickrSearch :: String -> Task Error JSON
const flickrSearch = compose(Http.get, makeUrl)

module.exports = { flickrSearch }
