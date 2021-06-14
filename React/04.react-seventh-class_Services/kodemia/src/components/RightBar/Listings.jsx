import React from 'react'

import ListItem from './ListItem'

import Styles from './Listings.module.css'

class RightBar extends React.Component{
    render(){
        return(

            <div className={`card ${Styles.CardRight}`}>
                <div class={`card-header ${Styles.CardTopHeader}`}>
                Listings <span>See all</span>
                </div>

                <ul class="list-group list-group-flush">
                    <ListItem title="Meet iOS community with informal interviews" text="misc"/>
                    <ListItem title="Frontend Engineer for OSS project" text="jobs"/>
                    <ListItem title="The ultimate compilation of Cheat sheets (200+) - 🎁 / Roadmap to dev 🚀 -Free!" text="collabs"/>
                </ul>      

                <div class="card-footer bg-white1 text-center font-weight-bold">
                    Create a Listing
                </div>          
            </div>

        )
    }
}


export default RightBar