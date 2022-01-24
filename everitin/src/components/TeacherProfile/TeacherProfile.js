import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid,Button } from '@material-ui/core';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import NavBar from '../Navbar';
import Posts from '../Posts/Posts';
import EditProfileForm from '../Form/EditProfileForm'
import image from '../../images/profile.jpg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';
const TeacherProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const classes=useStyles();
const [showForm, setShowForm] = useState(false);
const [currentId, setCurrentId] = useState(user?.result._id);
const dispatch = useDispatch();


useEffect(
    () => {
       setCurrentId(user?.result._id);
       console.log("Current ID",currentId)
    }, [user]);


    return ( 
    <Container max-width='lg'> 
      <Container style={{marginTop:'100px'}} >
            <Grid container className = { classes.mainContainer }
            justify = "space-between"
            alignItems = "stretch"
            spacing = { 3 } >
                      
        
        < Grid item xs = { 12 }
        sm = { 4 } >
            <h1 style={{color:'white'}}>My Profile</h1> 
            <img src={image} style={{borderRadius:'50%'}} width="240" height="240" />
          
          <div style={{ marginTop:'30px'}}>
          <Typography variant="h6" style={{color:'white'}} >Name : {user?.result.name}</Typography>
          
              </div>  
         </Grid > 
         {showForm ? (
           < Grid item xs = { 12 }
           sm = { 8 } >
              <EditProfileForm currentId = { user?.result.id }
               setCurrentId={setCurrentId}
               setShowForm={setShowForm}
           />
             </Grid>
          
         ): < Grid item xs = { 12 }
        sm = { 8 } >
           <div className={classes.right}>
                <div className={classes.dFlexRow}>
                  <Typography variant="h6" style={{color:'white'}} >Personal Details</Typography>
                  <Button 
                      style={{color:'white'}} 
                      size="small" 
                      onClick ={()=> {setShowForm(true)}}
                      >
                      <MoreHorizIcon fontSize="default" />
                  </Button>
                </div>
                <div className={classes.dFlexRow2}>
                   <Typography variant="h6" style={{color:'white'}} >Email Id: {user?.result.email}</Typography>
                </div>
                <div className={classes.dFlexRow2}>
                  <Typography variant="h6" style={{color:'white'}} >Phone Number :  {user?.result.phno}</Typography>
                </div>
                <div className={classes.dFlexRow2}>
                  <Typography variant="h6" style={{color:'white'}} >Blood Group :  {user?.result.bloodgroup}</Typography>
                </div>
                <div className={classes.dFlexRow2}>
                  <Typography variant="h6" style={{color:'white'}} > Father's name:  {user?.result.fatherName}</Typography>
                </div>
                <div className={classes.dFlexRow2}>
                  <Typography variant="h6" style={{color:'white'}} > Father's Phone:  {user?.result.fatherPhone}</Typography>
                </div>
                <div className={classes.dFlexRow2}>
                  <Typography variant="h6" style={{color:'white'}} > Mother's name:  {user?.result.motherName}</Typography>
                </div>
                <div className={classes.dFlexRow2}>
                  <Typography variant="h6" style={{color:'white'}} > Mother's Phone:  {user?.result.motherPhone}</Typography>
                </div>
           </div>
         </Grid > 
 }
    
        </Grid> </Container >
   </Container >

    );
}
export default TeacherProfile;