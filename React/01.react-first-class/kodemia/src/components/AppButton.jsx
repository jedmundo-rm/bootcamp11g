import React from 'react'

class AppButton extends React.Component{
    constructor(props) {
        super(props)
        console.log('props:', props)

        this.props = props
    }

    render(){

        // esto es para que si no tiene clase entonces no agregue nada
        // habvria que sustituir el ${this.props.className} por solo el className
        const className = this.props.className ? this.props.className : '';

        if(this.props.type === 'anchor'){
            return(
                // <a className={`btn btn-link ${styles.anchor}`}>{this.props.text}</a>
                <a className={`btn  ${this.props.className}`} href="./">
                    {this.props.text}
                </a>
            )
        }

        return(
            <button 
            className={`btn ${this.props.className}`} 
            type="button">{this.props.text}
            </button>
        )
    }
}


export default AppButton