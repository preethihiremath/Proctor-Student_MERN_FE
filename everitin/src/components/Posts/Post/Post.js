import React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import moment from 'moment';
import useStyles from './styles';

import {useDispatch} from 'react-redux';
import {deletePost} from '../../../actions/posts';

const Post=({post,setCurrentId}) =>{
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
        <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
        </Card>
    );
}

export default Post;