import React, {useState} from 'react'

import Styles from "./index.module.css";

import ico1 from "../../../images/sidebar/ico1.png";
import ico2 from "../../../images/sidebar/ico2.png";
import ico3 from "../../../images/sidebar/ico3.png";
import ico4 from "../../../images/sidebar/ico4.png";
import ico5 from "../../../images/sidebar/ico5.png";
import ico6 from "../../../images/sidebar/ico6.png";


export default function ListMenu({open}){

  //const [close, setClose] = useState(false);
  
    return(


      // <ul className = {`${open ? '': 'd-none'} ${Styles.MenuWrapper}`}  >
      //   <li>Home</li>
      //   <li>Reading List</li>
      //   <li>Listings</li>
      //   <li>Podcast</li>
      //   <li>Videos</li>
      // </ul>


        <div className={`${open ? '': 'd-none'} ${Styles.MenuMobile}  d-block d-md-none`} >
          
          <div className={`${Styles.MenuWrapper}`}>
              <div className={`${Styles.MenuTitle}`}>
                <h2>DEV Community</h2>

                <button className={`${Styles.MenuCloseBtn}`} type="button" 
                //close={close} onClick={() => setClose(!close)}
                >
                  <span>X</span>
                </button>

              </div>

              <ul>
                <li className="nav-item active"><a href=""><img src={`${ico1}`} /> Home</a></li>
                <li className="nav-item"><a href=""><img src={`${ico2}`} /> Reading List</a></li>
                <li className="nav-item"><a href=""><img src={`${ico3}`} /> Listings</a></li>
                <li className="nav-item"><a href=""><img src={`${ico4}`} /> Podcasts</a></li>
                <li className="nav-item"><a href=""><img src={`${ico5}`} /> Videos</a></li>
                <li className="nav-item"><a href=""><img src={`${ico6}`} /> Tags</a></li>
                <li className="nav-item"><a href="">More...</a></li>
              </ul>
            </div>

          </div>




      )
}