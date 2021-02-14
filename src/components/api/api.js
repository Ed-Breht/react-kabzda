import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': '036f9a32-8689-4c86-b9cf-3857720e978c' },
})

export const getAPIUsers = async () => {
  let res = await instance.get('https://jsonplaceholder.typicode.com/comments')

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
  res = await instance.get('https://jsonplaceholder.typicode.com/users')
  posts = posts.map((post, idx) => ({
    ...post,
    fullName: res.data[idx].name,
    location: {
      city: res.data[idx].address.street,
      country: res.data[idx].address.city,
    },
  }))
  return posts;

}

export const HeaderAPI = () => {
  return instance
    .get('https://social-network.samuraijs.com/api/1.0/auth/me')
    }


export const ProfileAPI = (userId) => {
  return instance
    .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
}

export const FollowAPI = (UserID) => {
 return   instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${UserID}`,{})
}


export const UnFollowAPI = (UserID) => {
  return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${UserID}`)
}