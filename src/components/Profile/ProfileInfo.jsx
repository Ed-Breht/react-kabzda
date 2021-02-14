import React from "react";
import styles from "./ProfileInfo.module.scss";
import ProfileStatus from "../posts/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>fuck</div>
    }

    return (
     <div>
         <div>
             {/*<img src='https://img5.goodfon.ru/wallpaper/nbig/c/68/art-stil-minimalizm-fon-art-style-minimalism-background-ko-3.jpg'/>*/}
         </div>
         <div className={styles}>
             <img src ={props.profile.photos.large}/>
             <ProfileStatus status={"Hello my friends"}/>
         </div>
     </div>
 )
}

export default ProfileInfo