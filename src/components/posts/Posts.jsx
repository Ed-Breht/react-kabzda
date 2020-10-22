import styles from './Posts.module.scss'
import React from "react";
import Post from "./Post";

const MyPosts = () => {
    return <div>
        my posts
        <div>
            <textarea></textarea>
            <button> Add</button>
        </div>
        <Post message='Hi, how are you'/>
        <Post message='It`s my first post'/>
    </div>
}

export default MyPosts;