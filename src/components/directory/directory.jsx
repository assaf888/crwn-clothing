import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item';
import './directory.scss';

const Directory = () => {

    const [section, set_Section] = useState([
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id:1
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id:2
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        id:4
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id:5
    }
    ])

    return ( 
        <div className="directory-menu">
            {
                section.map(({title, imageUrl, id}) => {
                    <MenuItem key={id} title={title} />})
            }
        </div>
     );
}
 
export default Directory;