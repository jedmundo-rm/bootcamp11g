import React from 'react'

import Listings from './Listings'
import OtherListings from './OtherListings'

//import Styles from './index.module.css'

class RightBar extends React.Component{
    render(){
        return(

            <div>
                <Listings/>
                <OtherListings/>        
            </div>

        )
    }
}


export default RightBar