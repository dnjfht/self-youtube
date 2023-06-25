import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      // axios 통신을 할 때 필요한 기본 세팅(공통적인 부분)

      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

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
      });
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
