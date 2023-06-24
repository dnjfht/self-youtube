import axios from "axios";

export async function search(keyword) {
  return axios //
    .get(`/videos/${keyword ? "keyword" : "mostPopular"}.json`)
    .then((res) => res.data.items);
}
