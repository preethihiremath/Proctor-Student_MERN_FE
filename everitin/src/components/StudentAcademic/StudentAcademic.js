import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import NavBar from '../Navbar';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import StudentMarks from '../Form/StudentMarks'
import ActivityPoints from '../Form/ActivityPointsUpload'

import useStyles from './styles';
const StudentAcademics = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
   
    useEffect(
        () => {
            dispatch(getPosts());
        }, [currentId, dispatch]);

    return ( 
    <Container max-width='lg'>
      
      
        <Container style={{marginTop:'100px'}} >
            <Grid container className = { classes.mainContainer }
            justify = "space-between"
            alignItems = "stretch"
            spacing = { 3 } >
        < Grid item xs = { 12 }
        sm = { 7 } >
        <StudentMarks currentId = { currentId }
        setCurrentId = { setCurrentId }
        /> 
        </Grid>
        <Grid item xs = { 12 }
        sm = { 4 } >
        <ActivityPoints currentId = { currentId }
        setCurrentId = { setCurrentId }
        /> </Grid >

        </Grid> </Container > </Container >

    );
}
export default StudentAcademics;