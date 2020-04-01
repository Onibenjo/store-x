import React, { useEffect } from "react";
import { Router } from "@reach/router";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";
import CollectionsPageContainer from "./../collection/collection.container";

const ShopPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatches the async fetching of collections
    // dispatch(fetchCollectionsStartAsync()); //redux thunk
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Router>
        <CollectionsOverviewContainer path="/" />
        <CollectionsPageContainer path=":collectionId" />
      </Router>
    </div>
  );
};

export default ShopPage;
