import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  async #searchByKeyword() {
    return axios //
      .get("/videos/keyword.json") //
      .then((res) => res.data.items) //
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #trendVideo() {
    return axios //
      .get("/videos/mostPopular.json") //
      .then((res) => res.data.items);
  }
}
