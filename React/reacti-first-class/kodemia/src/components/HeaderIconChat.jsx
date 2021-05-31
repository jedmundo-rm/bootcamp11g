import React from 'react';

import Styles from './HeaderIconChat.module.css'

// Assuming logo.png is in the same folder as JS file
import chat from '../images/chat.svg';


class HeaderIconChat extends React.Component{
    render(){
        return(
            <img src={chat} alt="Msg" className={`${Styles.HeaderIconChat} d-none`} />        
        )
    }
}

export default HeaderIconChat;