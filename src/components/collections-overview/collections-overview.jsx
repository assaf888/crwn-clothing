import './collections-overview.scss';
import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview'

const CollectionsOverview = () => {

    const { collections } = useSelector(state => state.shop);
    console.log(collections);

    const selectCollectionsForPreview = () => 
     collections ? Object.keys(collections).map(key => collections[key]) : [];
    return (
        <div className="collections-overview">
            {
                selectCollectionsForPreview().map(({ id, ...OtherCollectionProps }) => (
                    <CollectionPreview key={id} {...OtherCollectionProps} />
                ))
            }
        </div>
    );
}

export default CollectionsOverview;