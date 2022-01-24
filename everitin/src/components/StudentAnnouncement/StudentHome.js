import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import NavBar from '../Navbar';
import StudentPosts from '../Posts/StudentPosts';
import Form from '../Form/Form'
import image from '../../images/harrystyles.jpg';
import useStyles from './styles';
const StudentAnnouncement = () => {
const classes=useStyles();
const [currentId, setCurrentId] = useState(null);

const dispatch = useDispatch();


useEffect(
    () => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return ( 
        <Container max-width='lg'>
   

        <Container style={{marginTop:'80px'}} >
             
    <Typography variant="h4" style={{color:'white'}}>Announcements</Typography>
        <Grid container className = { classes.mainContainer }
            justify = "space-between"
            alignItems = "stretch"
            spacing = { 3 } style={{marginTop:'20px'}} >
        < Grid item xs = { 12 }
        sm = { 12 } >
        <StudentPosts setCurrentId = { setCurrentId } /> </Grid > 
       

        </Grid> </Container > </Container >


    );
}
export default StudentAnnouncement;