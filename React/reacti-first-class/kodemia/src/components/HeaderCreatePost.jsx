import React from 'react';

import Styles from './HeaderCreatePost.module.css'

class HeaderCreatePost extends React.Component{
    render(){
        return(
            <btn value="Create Post" className={`${Styles.HeaderCreatePost} btn btn-primary `}>Create Post</btn>        )
    }
}

export default HeaderCreatePost;