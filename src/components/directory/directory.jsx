import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../menu-item/menu-item';
import '../../components/directory/directory.scss';

const Directory = () => {

    const { sections } = useSelector(state => state.directory)

    return ( 
        <div className="directory-menu">
            {sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>)}
        </div>
     );
}
 
export default Directory;