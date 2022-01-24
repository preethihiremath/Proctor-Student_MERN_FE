import React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

import image from '../../../images/profile.jpg'
import moment from 'moment';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

const Post=({user,setCurrentId}) =>{
    const classes =useStyles();
    const dispatch =useDispatch();
    return(
        <Card className={classes.card}> 
         <CardMedia className={classes.media} image={image} title={user.name} />
        <div className={classes.overlay}>
                <Typography className={classes.title} variant="h5" gutterBottom>{user.name}</Typography>
               
        </div>
        <CardActions className={classes.cardActions}>
        <Typography  variant="h6" gutterBottom>{user.semester}{user.section}</Typography>
        <Button size="small" color="primary"> More Details</Button>
        </CardActions>
        </Card>
    );
}

export default Post;