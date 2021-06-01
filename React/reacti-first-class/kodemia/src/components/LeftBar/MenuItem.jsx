import React from 'react'

import Styles from './MenuItem.module.css'

class MenuItem extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){
        return(

            <li className={`${Styles.MenuItem} btn`}>
                <a href="./"><img src={this.props.icon} alt=""/> {this.props.text} </a>
            </li>

        )
    }
}


export default MenuItem