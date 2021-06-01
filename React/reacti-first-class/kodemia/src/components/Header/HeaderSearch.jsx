import React from 'react';

import Styles from './HeaderSearch.module.css'

class HeaderSearch extends React.Component{
    render(){
        return(
            <input type="search" placeholder="Search..." className={`${Styles.HeaderSearch}`} /> 
        )
    }
}

export default HeaderSearch;