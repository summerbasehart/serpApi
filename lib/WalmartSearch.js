const SerpApiSearch = require('./SerpApiSearch')

class WalmartSearch extends SerpApiSearch {

  constructor(api_key) {
    super(api_key, "walmart")
  }

  location(q, limit, callback) {
    throw "location is not supported for: " + this.engine ; 
  }
}

module.exports = WalmartSearch