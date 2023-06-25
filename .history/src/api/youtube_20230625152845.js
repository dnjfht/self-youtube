export default class Youtube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  async #searchByKeyword() {}

  async #trendVideo() {}
}
