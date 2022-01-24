import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid,Button,ButtonGroup,Divider,Card} from '@material-ui/core';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import NavBar from '../Navbar';
import Posts from '../Posts/Posts';
import Form from '../Form/Form'
import { useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import { getScheduledMeet ,createScheduledMeet} from '../../actions/meet';
import useStyles from './styles';
const StudentMeeting = () => {
const classes=useStyles();
const [currentId, setCurrentId] = useState(null);
const meets = useSelector((state) => state.meets);
const users = useSelector((state) => state.users);
const [time,setTime]=useState('hekoe');
const dispatch = useDispatch();

useEffect(
  () => {
      dispatch(getScheduledMeet());
  }, [meets, dispatch]);


const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });
    return ( 
    <Container max-width='lg'>
      
      <Container style={{marginTop:'100px'}} >
            <Grid container className = { classes.mainContainer }
            justify = "space-between"
            alignItems = "stretch"
            spacing = { 3 } >
<h2 style={{color:'white'}}>REQUEST A MEETING WITH YOUR PROCTOR</h2>

       
        < Grid item xs = { 12 }
        sm = { 7 } >
            <ScheduleMeeting
            borderRadius={10}
            primaryColor="#3f5b85"
            eventDurationInMinutes={30}
            availableTimeslots={availableTimeslots}
            onStartTimeSelect={()=>alert("Your request is sent")}
        />
         </Grid > 
                
         <Grid item xs = { 12 } sm ={ 5 } style={{padding:'20px'}} >
          {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    
      <Card>
        <Grid container   direction="column" className={classes.right}>
          <Grid item xs={12} className={classes.upcoming}>
              <Typography variant="h5" className={classes.title}>Upcoming Meetings From Proctor</Typography>

              {meets.map((meet)=>{
                  return <div style={{marginTop:'20px'}}>
                    <Typography variant="p">{meet.time}</Typography>
                    <Divider color="secondary" style={{marginTop:'10px'}}/></div>
              }
             )}
          </Grid>
          </Grid>
     
        
     
      </Card>
        </Grid >
        </Grid> </Container >
   </Container >
    );
}
export default StudentMeeting;