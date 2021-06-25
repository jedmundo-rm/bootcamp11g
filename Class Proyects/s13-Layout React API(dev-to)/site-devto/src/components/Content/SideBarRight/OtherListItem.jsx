import React from 'react'

import Styles from './OtherListItem.module.css'

class ListItem extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){
        return(
            <li class={`list-group-item ${Styles.ListItem}`}>{this.props.title}
                <h6><span className={`${Styles.BtnNew}`}>New</span></h6>
            </li>

        )
    }
}


export default ListItem