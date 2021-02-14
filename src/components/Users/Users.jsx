import React from 'react'
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import axios from 'axios'
import {FollowAPI, UnFollowAPI} from "../api/api";

let Users = (props) => {

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' +user.id}>
              <img src={user.photoUrl} className={styles.photo} />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                    disabled={props.followingProgress.some(id => id === user.id)}
                  onClick={() => {props.unfollow(user.id)}}>
                  Unfollow
                </button>
              ) : (
                <button
                    disabled={props.followingProgress.some(id => id === user.id)}
                  onClick={() => {props.follow(user.id)}}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
