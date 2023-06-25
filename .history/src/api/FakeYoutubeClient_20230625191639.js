import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search() {
    return axios.get("/videos/keyword.json");
  }

  async videos() {
    return axios.get("/videos/mostPopular.json");
  }
}
