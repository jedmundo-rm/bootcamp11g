import React from 'react';

import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'


import AppButton from '../AppButton'


import Styles from './index.module.css'



class Header extends React.Component{
    render(){
        return(

        <nav className={`${Styles.index} d-flex`}>

            <div className="col-12 col-md-6  d-flex align-items-center side-left">
                <HeaderLogo className={`${Styles.HeaderLogo}`}/>
                <HeaderSearch className={`${Styles.HeaderSearch}`}/>
            </div>
            <div className="col-12 col-md-6  d-flex align-items-center justify-content-end side-right">
                
                <AppButton 
                className="btn-link"
                text="Log in" 
                type="anchor"
                />

                <AppButton 
                className="btn-primary"
                text="Create Account"
                />

            </div>
        </nav>                    


        )
    }
}

export default Header;