export default class FakeYoutube {
  constructor() {}

  search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  #searchByKeyword(keyword) {
    return;
  }
}
