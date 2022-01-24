import React,{useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {Paper,TextField, Typography,Button,Grid} from '@material-ui/core';

import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts';
import UserCards from '../UserCards/UserCards';
const Form=({currentId,setCurrentId}) =>{
    const [creditsData,setCreditsData]=useState({
        credits1:'',
        credits2:'',
        credits3:'',
        credits4:'',
        credits5:''
       });
    const [marksData,setMarksData]=useState({
                 marks1:31,
                 marks2:31,
                 marks3:31,
                 marks4:31,
                 marks5:31
                });
      const [cgpa,setCgpa]=useState(null);
      const classes=useStyles();
      const handleSubmit=(e)=>{
          e.preventDefault();
        }

const calculateCGPA = () => {
   console.log(marksData);
   const total=marksData.marks1 +marksData.marks2+marksData.marks3+marksData.marks4+marksData.marks5;

   if(marksData.marks1 < 30 || marksData.marks2 < 30 || marksData.marks3 < 30 || marksData.marks4 < 30 || marksData.marks5 < 30  ){
       setCgpa(11);
     
   }
   else {
    const grade=(total/500000)/2000;
    setCgpa(grade);
   }
    //    switch(marksData.marks1){
    //        case marksData.marks1.marks >= 90:  gradepoints+= creditsData.credits1*10; console.log(677)
    //                                             break;
    //        case marksData.marks1.marks >= 75:  gradepoints+= creditsData.credits1*9;
    //                                             break;
                                                
    //        case marksData.marks1.marks >= 60:  gradepoints+= creditsData.credits1*8;
    //                                             break;
       
    //        case marksData.marks1.marks >= 45:  gradepoints+= creditsData.credits1*7;
    //                                             break;
    //        case marksData.marks1.marks >= 35:  gradepoints+= creditsData.credits1*6;
    //                                             break;
    //    }
 
    }
return(
    <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">Enter Your SEM-1 Marks</Typography>
   <Grid container spacing={2}>
       <Grid item xs={6}>
       <TextField 
            name="marks1" 
            type="number"
            variant="outlined" 
            required
            helperText="Please add number < 100"
            label="marks1" fullWidth 
            onChange={(e) => setMarksData({ ...marksData, marks1: e.target.value })} />
     
     <TextField 
            name="marks2" 
            type="number"
            required
            variant="outlined" 
            label="marks2" fullWidth 
            onChange={(e) => setMarksData({ ...marksData, marks2: e.target.value })} />
    <TextField 
     required
            name="marks3" 
            type="number"
            variant="outlined" 
            label="marks3" fullWidth 
            onChange={(e) => setMarksData({ ...marksData, marks3: e.target.value })} />
    <TextField 
     required
            name="marks4" 
            type="number"
            variant="outlined" 
            label="marks4" fullWidth 
            onChange={(e) => setMarksData({ ...marksData, marks4: e.target.value })} />
     <TextField 
      required
            name="marks5" 
            type="number"
            variant="outlined" 
            label="marks5" fullWidth 
            onChange={(e) => setMarksData({ ...marksData, marks5: e.target.value })} />
       </Grid>
       <Grid item xs={6}>
       <TextField 
            name="credits1" 
            type="number"
            variant="outlined" 
            required
            helperText="Please add number < 5"
            label="credits1" fullWidth 
            onChange={(e) => setCreditsData({ ...creditsData, credits1: e.target.value })} />
     
     <TextField 
            name="credits2" 
            type="number"
            required
            variant="outlined" 
            label="credits2" fullWidth 
            onChange={(e) => setCreditsData({ ...creditsData, credits2: e.target.value })} />
    <TextField 
     required
            name="credits3" 
            type="number"
            variant="outlined" 
            label="credits3" fullWidth 
            onChange={(e) => setCreditsData({ ...creditsData, credits3: e.target.value })} />
    <TextField 
     required
            name="credits4" 
            type="number"
            variant="outlined" 
            label="credits4" fullWidth 
            onChange={(e) => setCreditsData({ ...creditsData, credits4: e.target.value })} />
     <TextField 
      required
            name="credits5" 
            type="number"
            variant="outlined" 
            label="credits5" fullWidth 
            onChange={(e) => setCreditsData({ ...creditsData, credits5: e.target.value })} />
       </Grid>
       <Grid item xs={10}>
       <Typography variant="h6" style={{marginLeft:'10px',marginBottom:'10px'}}>SGPA : { cgpa !=11 ? <div style={{color:'green'}}>{cgpa}</div>:<div style={{color:'red'}}>SGPA With held</div>}</Typography> 
       </Grid>
   </Grid>
      

      <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={calculateCGPA} fullWidth>Calculate SGPA</Button>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
    
    </form>
  </Paper>
    );
}

export default Form;