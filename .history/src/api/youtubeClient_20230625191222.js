import axios from "axios";

export default class YOutubeCLient {
  constructor() {
    this.httpClient = axios.create({
      // axios 통신을 할 때 필요한 기본 세팅(공통적인 부분)

      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search() {
    this.httpClient.get("search", params);
  }
}
