import React from 'react'

import MenuItem from './MenuItem'

// Assuming logo.png is in the same folder as JS file
import ico1 from '../../images/sidebar/ico1.png';
import ico2 from '../../images/sidebar/ico2.png';
import ico3 from '../../images/sidebar/ico3.png';
import ico4 from '../../images/sidebar/ico4.png';
import ico5 from '../../images/sidebar/ico5.png';
import ico6 from '../../images/sidebar/ico6.png';

class LeftBar extends React.Component{
    render(){
        return(

            <ul className="list-wrapper">
                <MenuItem
                icon={ico1}
                text="Home"
                />
                <MenuItem
                icon={ico2}
                text="Reading List"
                />
                <MenuItem
                icon={ico3}
                text="Listings"
                />
                <MenuItem
                icon={ico4}
                text="Podcast"
                />
                <MenuItem
                icon={ico5}
                text="Videos"
                />
                <MenuItem
                icon={ico6}
                text="Tags"
                />
            </ul>



        )
    }
}


export default LeftBar