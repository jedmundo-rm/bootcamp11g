import React from 'react';

import Styles from './HeaderLogo.module.css'

class HeaderLogo extends React.Component{
    render(){
        return(
            <h1 className={`${Styles.HeaderLogo}`}>DEV</h1>
        )
    }
}

export default HeaderLogo;