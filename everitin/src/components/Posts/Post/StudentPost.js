import React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import moment from 'moment';
import useStyles from './styles';

import {useDispatch} from 'react-redux';


const StudentPost=({post,setCurrentId}) =>{
    const classes =useStyles();
    const dispatch =useDispatch();
    return(
        <Card className={classes.card}> 
        <div className={classes.overlay}>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
                <Typography variant="body2" style={{marginLeft:'15px'}}>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        
        </Card>
    );
}

export default StudentPost;