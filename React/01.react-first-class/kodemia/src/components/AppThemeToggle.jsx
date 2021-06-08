import React from 'react'

import Styles from './AppThemeToggle.module.css'

class AppThemeToggle extends React.Component{

    constructor(props){
        super(props)

        this.state = { theme: 'light'}
    }

    toggle() {
        const theme = this.state.theme === 'light' ? 'dark' : 'light'

        this.setState({ theme });
    }

    render(){

        const className = this.state.theme === 'light' ? Styles.AppThemeToggleLight : Styles.AppThemeToggleDark
        return(
            <div className={className} onClick={this.toggle.bind(this)}>
                {this.state.theme}
                <span className={this.state.theme}></span>
            </div> 

        )
    }

    // componentWillMount(){
    //     console.log('antes de que este en el dom')
    // }

    componentDidMount(){
        document.body.setAttribute('theme', this.state.theme);
        console.log('ya estoy en el DOM')
    }

    // componentWillUpdate(){
    //     console.log('antes de que me actualice')
    // }

    componentDidUpdate(){
        document.body.setAttribute('theme', this.state.theme);
        console.log('cuando ya me actualice')
    }
}


export default AppThemeToggle