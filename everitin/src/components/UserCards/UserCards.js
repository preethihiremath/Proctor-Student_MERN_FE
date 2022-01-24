import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import UserCard from './UserCard/UserCard';
import useStyles from './styles';

const UserCards = ({ setCurrentId }) => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();

  return (
    !users.length ? <Typography color='white'>No Students</Typography> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {users.map((user) => (
          
          <Grid key={user._id} item xs={12} sm={6} md={4}>
            {user.role== 'student' ? ( <UserCard user={user} setCurrentId={setCurrentId} />):(<div></div>)}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default UserCards;