import React from 'react'
import Users from "./Users";
import { connect } from 'react-redux'
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";
import {getUsers} from "../../selectors/selectors";


let mapStateToProps = (state) => {
  return {
    users: getUsers(state)
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
      follow: (userId) => {
          dispatch(followAC(userId));
      },
      unfollow: (userId) => {
          dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
          dispatch(setUsersAC(users))
      }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
