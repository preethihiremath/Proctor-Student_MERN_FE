import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid,Card ,Button,ButtonGroup,Divider} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { useDispatch } from 'react-redux';
import { getScheduledMeet ,createScheduledMeet} from '../../actions/meet';

import { useSelector } from 'react-redux';
import useStyles from './styles';

const MeetingRequests = () => {

const classes=useStyles();
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();
const meets = useSelector((state) => state.meets);
const users = useSelector((state) => state.users);
const [meetData,setMeetData]=useState({
  time:new Date().toString(),
  from_name:user?.result.name
});

useEffect(
  () => {
      dispatch(getScheduledMeet());
  }, [meets, dispatch]);



const availableTimeslots = [0,4, 2, 3, 4,5,6,7,8,9,10].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });


  const startTime =(props)=>{
      setMeetData({ ...meetData, time:props.startTime.toString() })
      console.log("Checking meetData hook,after setMeetData",props.startTime.toString(),meetData )
      dispatch(createScheduledMeet(meetData));
    }

    return ( 
    <Container max-width='lg'>
      <Container style={{marginTop:'100px'}} >
            <Grid container className = { classes.mainContainer }
            justify = "space-between"
            alignItems = "stretch"
            spacing = { 3 } >
        <Grid item xs = { 12 } sm={ 7 } >
          <ScheduleMeeting
          borderRadius={10}
          primaryColor="#3f5b85"
          eventDurationInMinutes={30}
          availableTimeslots={availableTimeslots}
          onStartTimeSelect={startTime} />
        </Grid > 

        <Grid item xs = { 12 } sm ={ 5 } style={{padding:'20px'}} >
          {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    
      <Card>
        <Grid container   direction="column" className={classes.right}>
          <Grid item xs={12} className={classes.upcoming}>
              <Typography variant="h5" className={classes.title}>Upcoming Meetings</Typography>

              {meets.map((meet)=>{
                  return <div style={{marginTop:'10px'}}>
                    <Typography variant="p">{meet.time}</Typography>
                    <Divider color="secondary" style={{marginTop:'10px'}}/></div>
              }
             )}
          </Grid>
         
          <Grid item xs={12}>
          <Typography variant="h5" className={classes.title}> Meetings Requests</Typography>

          {users.map((user) => (
          
          <div className={classes.dflexRow}>
                        <div className={classes.dflexCol}>
                            <Typography variant="h6"> {user.name}</Typography>
                            <Typography variant="p">{new Date().toLocaleDateString()}</Typography>
                        </div>
                        <ButtonGroup disableElevation variant="contained" color="primary">
                              <Button size="small">Accept</Button>
                              <Button size="small" color="secondary">Reject</Button>
                            </ButtonGroup>
            </div>
            ))}
          </Grid>

        </Grid>
     
        
     
      </Card>
        </Grid >

        </Grid> </Container >
   </Container >

    );
}
export default MeetingRequests;