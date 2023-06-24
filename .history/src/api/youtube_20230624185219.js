export default class Youtube {
  constructor() {}

  search(keyword) {
    return keyword ? this.#searchByKeyword : this.#trendVideo;
  }
}
