import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = () => {
  const { collections } = useSelector(
    createStructuredSelector({ collections: selectCollectionsForPreview })
  );
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
