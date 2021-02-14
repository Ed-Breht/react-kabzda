import React from 'react'
import { connect } from 'react-redux'
import {
  follow, getUserThunkCreator,
  setCurrentPage,
 toggleFollowingProgress,
  unfollow,
} from '../../redux/Users-reducer'
import { getUsers } from '../../selectors/selectors'

import Users from './Users'
import preloader from './../../images/preloader.svg'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUserThunkCreator();
  }


  render() {
    return (
      <>
        {this.props.isFetching ? (
          <img src={preloader} style={{ backgroundColor: 'white' }} />
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProgress={this.props.followingProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}


export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      getUserThunkCreator
    })
)(UsersContainer)

