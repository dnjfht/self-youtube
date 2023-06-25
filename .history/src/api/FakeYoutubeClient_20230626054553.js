import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/keyword.json");
  }

  async videos() {
    return axios.get("/videos/mostPopular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
