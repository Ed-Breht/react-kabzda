import React from 'react';
import styles from './Profile.module.scss'
import MyPosts from "./posts/Posts";

const Profile = () => {
    return  <div className={styles.content}>
        <div>
            <img src='https://img3.goodfon.ru/wallpaper/nbig/f/60/minimalizm-goluboy-fon-kubik.jpg' />
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>
}

export default  Profile;