import * as types from "./actionTypes";
import { constructHealthNewsUrl } from "../utils/apis";

export function fetchHelthNews() {
  return dispatch =>
    fetch(constructHealthNewsUrl())
      .then(response => response.json())
      .then(json => dispatch(receiveHelthNews(json.articles)))
      .catch((error) => {
        console.log(error);
      });
}

export function receiveHelthNews(articles) {
  return {
    type: types.RECEIVE_HELTH_NEWS,
    data: articles,
  };
}
