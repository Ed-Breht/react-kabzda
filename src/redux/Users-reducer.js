import { FollowAPI, getAPIUsers, UnFollowAPI } from '../components/api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROPGRESS = 'TOGGLE_IS_FOLLOWING_PROPGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }
    case TOGGLE_IS_FETCHING:
      console.log(action)
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROPGRESS: {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userID]
          : state.followingProgress.filter((id) => id != action.userID),
      }
    }

    default:
      return state
  }
}
export const followSuccess = (userID) => ({ type: FOLLOW, userID })

export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const toggleFollowingProgress = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROPGRESS,
  isFetching,
  userID,
})

export const getUserThunkCreator = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    getAPIUsers().then((r) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(r))
    })
  }
}

export const follow = (UserID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, UserID))
    FollowAPI(UserID).then((res) => {
      if (!res.data.resultCode) {
        dispatch(followSuccess(UserID))
      }
      dispatch(toggleFollowingProgress(false, UserID))
    })
  }
}

export const unfollow = (UserID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, UserID))
    UnFollowAPI(UserID).then((res) => {
      if (!res.data.resultCode) {
        dispatch(unfollowSuccess(UserID))
      }
      dispatch(toggleFollowingProgress(false, UserID))
    })
  }
}

export default usersReducer
