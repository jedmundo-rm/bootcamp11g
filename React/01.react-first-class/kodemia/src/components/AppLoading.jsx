import React from 'react'

import Styles from './AppLoading.module.css'

class AppLoading extends React.Component{

    constructor(props){
        super(props)

        this.state = { active: true}
    }


    render(){

        //const active = this.state.active ? 'active' : "";

        const active = this.state.active === true ? Styles.AppLoadingVisible : Styles.AppLoadingHidden

        return(
            <div className={`${active} align-items-center justify-contents-center`}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> 

        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ active: false})
        }, 500) ;
    }


}


export default AppLoading