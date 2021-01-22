import React from "react";
import styles from "./ProfileInfo.module.scss";


const ProfileInfo = (props) => {
 return (
     <div>
         <div>
             <img src='https://img5.goodfon.ru/wallpaper/nbig/c/68/art-stil-minimalizm-fon-art-style-minimalism-background-ko-3.jpg'/>
         </div>
         <div className={styles}>
             ava+description
         </div>
     </div>
 )
}

export default ProfileInfo