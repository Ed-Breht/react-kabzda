import React from "react";
import styles from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src='https://smolensk-i.ru/wp-content/uploads/2019/08/Kubik-Rubika-ulitsa-Nikolaeva-ulitsa-Marinyi-Raskovoy-foto-facebook.com-baburchenkov.jpg'/>
            {props.message}
            <div>
            <span> Like </span>
            </div>
        </div>)
}

export default Post;