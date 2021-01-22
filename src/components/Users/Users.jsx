import React from 'react' // JSX не работает без реакт расширения , транспилятор Babel
import styles from './Users.module.css'
import axios from 'axios'

class Users extends React.Component {
  constructor(props) {
    super(props)
    const postsRequest = async () => {
      let res = await axios.get('https://jsonplaceholder.typicode.com/comments')

      let posts = res.data.map((post) => ({
        id: post.id,
        followed: false,
        fullName: post.name,
        status: post.body,
        location: { city: 'Moscow', country: 'Russian' },
        photoUrl:
          'https://uchim-klass.ru/images/preview/biografiya/1026/dmitrij-donskoj.jpg',
      }))
      posts = posts.slice(0, 10)
      res = await axios.get('https://jsonplaceholder.typicode.com/photos')
      posts = posts.map((post, idx) => ({
        ...post,
        photoUrl: res.data[idx].url,
      }))
      res = await axios.get('https://jsonplaceholder.typicode.com/users')
      posts = posts.map((post, idx) => ({
        ...post,
        fullName: res.data[idx].name,
        location: {
          city: res.data[idx].address.street,
          country: res.data[idx].address.city,
        },
      }))

      this.props.setUsers(posts)
    }
    postsRequest()
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.photoUrl} className={styles.photo} />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id)
                    }}
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
}

export default Users
