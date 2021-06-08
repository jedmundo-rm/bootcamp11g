import React from 'react'

import Styles from './AppCard.module.css'

class AppCard extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){
        return(

            <div className={`card ${Styles.AppCard}`}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>

        )
    }
}


export default AppCard