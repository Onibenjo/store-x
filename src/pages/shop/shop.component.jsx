import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { updateCollections } from './../../redux/shop/shop.actions';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });

    return () => unsubscribeFromSnapshot();
  }, [dispatch]);

  return ( 
    <div className="shop-page">
      <Router>
        <CollectionsOverviewWithSpinner isLoading={loading} path="/" />
        <CollectionPageWithSpinner isLoading={loading} path=":collectionId" />
      </Router>
    </div>
  );
};

export default ShopPage;
