import React from "react";
import styles from "./ProfileInfo.module.scss";


const ProfileInfo = (props) => {
 return (
     <div>
         <div>
             <img src='https://img3.goodfon.ru/wallpaper/nbig/f/60/minimalizm-goluboy-fon-kubik.jpg'/>
         </div>
         <div className={styles}>
             ava+description
         </div>
     </div>
 )
}

export default ProfileInfo