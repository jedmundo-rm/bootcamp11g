import React from 'react'

import Styles from './AppAuthor.module.css'


class AppAuthor extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){
        return(

            // <li className={`${Styles.AppAuthor} btn`}>
            //     <a href="./"><img src={this.props.icon} alt=""/> {this.props.text} </a>
            // </li>


            <div className={`${Styles.autor}`}>
                <img className={`rounded-circle border border-secondary ${Styles.profile}`}
                    src={`${this.props.profile}`} />
                <div className={`${Styles.autorName}`}>
                    <div>{`${this.props.name}`}</div>
                    <div>{`${this.props.fecha}`}</div>
                </div>
            </div>

        )
    }
}


export default AppAuthor