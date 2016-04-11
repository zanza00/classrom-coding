const Task = require('data.task')
const { getJSON } = require('jquery')
const { compose, replace, prop, map } = require('ramda')


const Http = {
  // get -> Task Error JSON
  get: (url) => new Task((rej,res) => getJSON(url).error(rej).done(res))
}

const Url = String

const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=df47baeb4aa85b2fee3fe38170d9cf0e&tags={TAGS}&extras=url_s&format=json&jsoncallback=?'

//makeUrl :: String -> Url
const makeUrl = (t) => replace('{TAGS}', t, baseUrl)

// extractUrls :: JSON -> [Url]
const extractUrls = compose(map(prop('url_s')), prop('photo'), prop('photos'))

//flickrSearch :: String -> Task Error [URL]
const flickrSearch = compose(map(extractUrls), Http.get, makeUrl)

module.exports = { flickrSearch }
