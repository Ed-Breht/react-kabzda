import React from 'react'
import styles from './Post.module.scss'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

const Post = ({ message }) => {
  return (
    <Box m={0.5} p={0.5}>
      <Paper elevation={3} className={styles.post} style={{ padding: '5px' }}>
        <img
          alt={'avatar'}
          src="https://smolensk-i.ru/wp-content/uploads/2019/08/Kubik-Rubika-ulitsa-Nikolaeva-ulitsa-Marinyi-Raskovoy-foto-facebook.com-baburchenkov.jpg"
        />
        {message}
        <div>
          <span> Like </span>
        </div>
      </Paper>
    </Box>
  )
}

export default Post
