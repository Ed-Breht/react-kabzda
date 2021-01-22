import React from 'react'
import styles from './Profile.module.scss'
import ProfileInfo from './Profile/ProfileInfo'
import MyPostsContainer from "./posts/MyPostsContainer";
import StoreContext from "./StoreContext";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile
