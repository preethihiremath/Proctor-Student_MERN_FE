import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import StudentPost from './Post/StudentPost';
import useStyles from './styles';

const StudentPosts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <Typography color='white'>No Announcement Yet</Typography> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={2}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={12}>
            <StudentPost post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default StudentPosts;