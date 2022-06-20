const expect = require('expect');
const serpapi = require('./../lib/main');

describe('Google Search', () => {
  it("json", (done) => {
    let api_key = '248a905a36a8b05a463154ec61be30338623b21dd715a8930794c0f7807f390b'
    if (api_key != null) {
      let search = new serpapi.GoogleSearch(api_key)
      search.json({
        q: "Coffee"
      }, (data) => {
        expect(data.search_metadata.status).toEqual("Success")
        expect(data.organic_results.length).toBeGreaterThan(5)
        done()
      })
    } else {
      done()
    }
  }).timeout(10000)
});
