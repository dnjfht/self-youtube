import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: "" },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  async #searchByKeyword() {}

  async #trendVideo() {}
}
