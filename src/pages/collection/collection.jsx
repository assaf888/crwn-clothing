import CollectionItem from '../../components/collection-item/collection-item';

import { useSelector } from 'react-redux';

import './collection.scss';

const CollectionPage = ({ match }) => {

    const { collections } = useSelector(state => state.shop);

    const { title, items } = collections[match.params.collectionId];
    

    return ( 
        <div className="collection-page">
            <h2 className='title'>{ title }</h2>
            <div className="items">
                {
                    items.map( item => <CollectionItem key={item.id} item={item} /> )
                }
            </div>
        </div>
     );
}
 
export default CollectionPage;