import React from 'react';

import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderCreatePost from './HeaderCreatePost'
import HeaderIconChat from './HeaderIconChat'
import HeaderIconNotif from './HeaderIconNotif'

import Styles from './Header.module.css'



class Header extends React.Component{
    render(){
        return(
            <body>
                <div className="container">
                    <div className="row">
                        <nav className={`${Styles.Header} d-flex`}>

                            <div className="col-12 col-md-6  d-flex align-items-center side-left">
                                <HeaderLogo className={`${Styles.HeaderLogo}`}/>
                                <HeaderSearch className={`${Styles.HeaderSearch}`}/>
                            </div>
                            <div className="col-12 col-md-6  d-flex align-items-center justify-content-end side-right">
                                <HeaderCreatePost className={`${Styles.HeaderCreatePost}`}/>
                                <HeaderIconChat className={`${Styles.HeaderIconChat}`}/>
                                <HeaderIconNotif className={`${Styles.HeaderIconNotif}`}/>
                            </div>

                        </nav>                    
                    </div>
                </div>                
            </body>


        )
    }
}

export default Header;