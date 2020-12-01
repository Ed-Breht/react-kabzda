import React from 'react'
import styles from './Profile.module.scss'
import MyPosts from './posts/Posts'
import ProfileInfo from './Profile/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile
