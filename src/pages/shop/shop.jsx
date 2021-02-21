import React, { useState } from 'react';

import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/collection-preview/collection-preview';


const ShopPage = () => {
    const [collections,set_Collections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...OtherCollectionProps}) => (
                    <CollectionPreview key={id} {...OtherCollectionProps} />
                ))
            }
        </div>
    );
}
 
export default ShopPage;