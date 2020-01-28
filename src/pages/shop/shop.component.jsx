import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = (props) => {
  console.log(props)
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
