import React from 'react'


class ListItem extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){
        return(
            <li class={`list-group-item`}>{this.props.title}
                <h6>{this.props.text}</h6>
            </li>

        )
    }
}


export default ListItem