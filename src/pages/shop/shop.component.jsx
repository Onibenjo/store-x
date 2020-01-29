import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Router } from "@reach/router";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Router>
        <CollectionsOverview path="/" />
        <CollectionPage path=":collectionId" />
      </Router>
    </div>
  );
};

export default ShopPage;
