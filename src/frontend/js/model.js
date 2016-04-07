const Task = require('data.task')
const {getJSON} = require('jquery')
const {compose, replace, prop, map} = require('ramda')


const Http = {
  // get -> Task Error JSON
  get: (url) => new Task((rej,res) => getJSON(url).error(rej).done(res))
}

const Url = String

const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8425bb55f2c56baebbde2f8c980189c5&tags={TAGS}&format=json&nojsoncallback=1&auth_token=72157666344726310-86723e2c23201f79&api_sig=860ce5b81b3d372b7022746bcc6c9bf0'

//makeUrl :: String -> Url
const makeUrl = (t) => replace('{TAGS}', t, baseUrl)

//flickrSearch :: String -> Task Error JSON
const flickrSearch = compose(Http.get, makeUrl)

module.exports = { flickrSearch }
