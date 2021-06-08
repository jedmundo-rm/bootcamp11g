import React from 'react'

import OtherListItem from './OtherListItem'

import Styles from './OtherListings.module.css'

class OtherListings extends React.Component{
    render(){
        return(

            <div className={`card ${Styles.CardRight}`}>
                <div class={`card-header ${Styles.CardTopHeader}`}>
                #watercooler
                </div>

                <ul class="list-group list-group-flush">
                    <OtherListItem title="My initial thoughts on Web Monetization"/>
                    <OtherListItem title="My Twitter Interview Experience" />
                    <OtherListItem title="Find Open Source Project to Contribute"/>
                </ul>              
            </div>
        )
    }
}


export default OtherListings