import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.reducer";

export function* fetchCollectionsAsync() {
  yield console.log("I am fured");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
