export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideo();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient //
      .search({
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
    return this.apiClient //
      .videos({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
          type: "video",
        },
      })
      .then((res) => res.data.items);
  }

  async relatedVideos(id) {
    return this.apiClient //
      .search({
        params: {
          part: "snippet",
          relatedToVideoId: id,
          type: "video",
        },
      })
      .then((res) => res.data.items);
  }

  async channelImgUrl(id) {
    return this.apiClient //
      .channels({
        params: {
          part: "snippet",
          id: id,
        },
      })
      .then((res) => res.data.items)
      .then((items)=>items.map((item)=> {...item, id: item.id.videoId})
  }
}
