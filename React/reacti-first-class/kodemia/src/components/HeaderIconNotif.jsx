import React from 'react';

import Styles from './HeaderIconNotif.module.css'

// Assuming logo.png is in the same folder as JS file
import notif from '../images/notif.svg';
import chat from '../images/chat.svg';

class HeaderIconNotif extends React.Component{
    render(){
        return(
            <div>
                <img src={notif} alt="Notif" className={`${Styles.HeaderIconNotif}`}/>       
                <img src={chat} alt="Notif" className={`${Styles.HeaderIconNotif}`}/>            
            </div>
   
        )
    }
}

export default HeaderIconNotif;