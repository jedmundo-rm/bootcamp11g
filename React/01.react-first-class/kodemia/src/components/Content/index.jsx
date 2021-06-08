import React from 'react'

import AppCard from './AppCard'
import AppAuthor from './AppAuthor'
import AppReacciones from './AppReacciones'

import Styles from './index.module.css'


// Rutas imagenes
import image from '../../images/photo-main.jpeg';

import profile1 from '../../images/profiles/user2.webp';
import profile2 from '../../images/profiles/user3.webp';

class Content extends React.Component{
    render(){
        return(
            <section>
                <AppCard>
                    <img src={image} className={`card-img-top ${Styles.cardImg}`} alt="..."></img>

                    <AppAuthor name="Maria" fecha="8 May" profile={profile1}/>

                    <div>
                        <h2 className={`${Styles.cardTitle}`}>
                        <a href="post.html">Diagnosing Performance Issues 💻</a>
                        </h2>
                    </div>

                    <div className={`${Styles.tags}`}>
                        <a href="#"><span>#</span>beginners</a>
                        <a href="#"><span>#</span>productivity</a>
                        <a href="#"><span>#</span>javascript</a>
                        <a href="#"><span>#</span>webdev</a>
                    </div>

                    <AppReacciones reactions="10" comments="20" read="10"/>
                    
                </AppCard>

                <AppCard>
                    <AppAuthor name="Gustavo" fecha="8 Ene"  profile={profile2}/>

                    <div>
                        <h2 className={`${Styles.cardTitle}`}>
                        <a href="./">I landed my first dev job after 6 months of building projects. Here's my story!</a>
                        </h2>
                    </div>

                    <div className={`${Styles.tags}`}>
                        <a href="#"><span>#</span>beginners</a>
                        <a href="#"><span>#</span>productivity</a>
                        <a href="#"><span>#</span>javascript</a>
                        <a href="#"><span>#</span>webdev</a>
                    </div>

                    <AppReacciones reactions="20" comments="36" read="22"/>
                    
                </AppCard>
            </section>


        )
    }
}


export default Content