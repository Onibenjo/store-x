import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from './../../redux/shop/shop.selectors';

const ShopPage = () => {
  const { collections } = useSelector(createStructuredSelector({collections: selectCollections}));

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  
}

export default ShopPage;
