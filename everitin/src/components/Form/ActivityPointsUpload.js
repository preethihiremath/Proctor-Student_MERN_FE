import React,{useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {Paper,TextField, Typography,Button} from '@material-ui/core';

import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts';
const Form=({currentId,setCurrentId}) =>{

      const [postData,setPostData]=useState({
                   creator:'',
                   title:'',
                   message:'',
                    });
     
      const post=useSelector((state)=>currentId? state.posts.find((p)=>p._id===currentId):null);
      const dispatch=useDispatch();
      const classes=useStyles();
      useEffect(() => {
            if (post) setPostData(post);
          }, [post]);
      
          const handleSubmit=(e)=>{
      e.preventDefault();

      if(currentId){
         dispatch(updatePost(currentId,postData)) ;
        
      }else{
      dispatch(createPost(postData));
 
}       clear(); }
const clear = () => {
      setCurrentId(0);
      setPostData({ creator: '', title: '', message: '' });
    }
return(
    <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">Activity Points Certificate</Typography>
   
      <TextField 
            name="title" 
            variant="outlined" 
            label="Title" fullWidth 
            value={postData.title} 
            onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <TextField 
            name="message" 
            variant="outlined" 
            label="Message" fullWidth multiline rows={4} 
            value={postData.message} 
            onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            <div style={{margin:'10px'}}>
            <input type="file" name="file"  id="file"/>
            </div>
    
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
    );
}

export default Form;