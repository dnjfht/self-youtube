import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  #searchByKeyword(keyword) {
    return axios //
      .get("/videos/keyword/json") //
      .then((res) => res.data.items);
  }
}
