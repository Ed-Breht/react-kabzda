import styles from './Posts.module.scss'
import React from 'react'
import Post from './Post'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const MyPosts = (props) => {
let postsElement = props.posts.map((post) => <Post message={post.message} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <Box mb={1}>
          <TextField
            ref={newPostElement}
            id="filled-multiline-flexible"
            label="Post text"
            multiline
            rowsMax={4}
            value={props.newPostText}
            onChange={onPostChange}
            variant="filled"
            style={{ backgroundColor: 'white' }}
          />
        </Box>
        <div>
          <Button variant="contained" color="secondary" onClick={addPost}>
            Add
          </Button>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  )
}

export default MyPosts
