import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/users';
import useStyles from './styles';
import UserCards from '../UserCards/UserCards';
const TeacherStudentList = () => {
const classes=useStyles();
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();
useEffect(
    () => {
        dispatch(getUsers());
    }, [currentId, dispatch]);

    return ( 
    <Container max-width='lg'>
        <Container style={{marginTop:'80px'}} >   
            <Typography variant="h4" style={{color:'white'}}>My Students</Typography>
            <Grid container className = { classes.mainContainer }
                justify = "left"
                spacing = { 3 } style={{marginTop:'20px'}} >
                < Grid item xs = { 12 } sm = { 12 } >
                        <UserCards setCurrentId = { setCurrentId } /> </Grid > 
                </Grid>
         </Container >
    </Container >
    );
}
export default TeacherStudentList;