import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collectionId }) => {
  const collection = useSelector(selectCollection(collectionId));
  // const collection = useSelector(state =>
  //   selectCollection(collectionId)(state)
  // );
  const { title, items } = collection;
  return (
    <>
      <h2>{title}</h2>
      <div className="collection-page">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CollectionPage;
