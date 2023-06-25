import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search() {
    axios //
      .get("/videos/keyword.json");
  }

  async videos() {
    axios //
      .get("/videos/mostPopular.json");
  }
}
