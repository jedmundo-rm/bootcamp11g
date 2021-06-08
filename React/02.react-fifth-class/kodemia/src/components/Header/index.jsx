import React from 'react';

import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'


import AppButton from '../AppButton'
import AppThemeToggle from '../AppThemeToggle'

import Styles from './index.module.css'



class Header extends React.Component{
    render(){
        return(

        <nav className={`${Styles.Header} d-flex`}>

            <div className="col-12 col-md-6  d-flex align-items-center side-left">
                <HeaderLogo />
                <HeaderSearch />
            </div>
            <div className="col-12 col-md-6  d-flex align-items-center justify-content-end side-right">
                
                <AppButton 
                className="btn-link btn-1"
                text="Log in" 
                type="anchor"
                />

                <AppButton 
                className="btn-primary btn-2"
                text="Create Account"
                />

                <AppThemeToggle/>

            </div>
        </nav>                    


        )
    }
}

export default Header;