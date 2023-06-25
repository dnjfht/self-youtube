import axios from "axios";

export default class Youtube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient //
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return {
            ...item,
            id: item.id.videoId,
          };
        })
      );
  }

  async #trendVideo() {
    return this.httpClient //
      .get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
          type: "video",
        },
      })
      .then((res) => res.data.items);
  }
}
