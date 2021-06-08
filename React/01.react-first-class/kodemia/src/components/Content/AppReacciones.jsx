import React from 'react'

import Styles from './AppReacciones.module.css'



// Rutas imagenes
import imgReactions from '../../images/reaction-heart.svg';
import imgComments from '../../images/reaction-comment.svg';


class AppReacciones extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){
        return(

            // <li className={`${Styles.AppReacciones} btn`}>
            //     <a href="./"><img src={this.props.icon} alt=""/> {this.props.text} </a>
            // </li>


            <div className={`${Styles.reactions}`}>
                <div className={`${Styles.reactLeft}`}>
                    <a href="#">
                        <img src={imgReactions} />
                        <span> {this.props.reactions} </span><span className="react-text"> &nbsp;reactions</span>
                    </a>
                    <a href="#">
                        <img src={imgComments} />
                        <span> {this.props.comments} </span><span className="react-text"> &nbsp;comments</span>
                    </a>
                </div>
                <div className="react-right">
                    <span>{this.props.read} min read</span>
                    <button>Save</button>
                </div>
            </div>

        )
    }
}


export default AppReacciones