import { takeEvery, call, put, all } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.reducer";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "./../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

// async fetching of collections from firestore
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    //kinda like async await
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //kinda like dispatch
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}
// fetchcollections
export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
