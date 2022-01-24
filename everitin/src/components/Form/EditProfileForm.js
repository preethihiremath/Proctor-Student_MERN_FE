import React,{useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {Paper,TextField, Typography,Button} from '@material-ui/core';
import { UPDATEMYDETAILS } from '../../constants/actionTypes';
import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

const EditProfileForm=({currentId,setCurrentId,setShowForm}) =>{
  const dispatch=useDispatch();
  const classes=useStyles();
  const navigate = useNavigate();  

   //   const post=useSelector((state)=>currentId? state.posts.find((p)=>p._id===currentId):null);

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [userData,setUserData]=useState({
                   name:user?.result.name,
                   email:user?.result.email,
                   phno:user?.result.phno,
                   bloodgroup:user?.result.bloodgroup,
                   fatherName:user?.result.fatherName,
                   fatherPhone:user?.result.fatherPhone,
                   motherName:user?.result.motherName,
                   motherPhone:user?.result.motherPhone
                    });
     
  
      useEffect(() => {
        if (user) setUserData(user);
      }, [user]);   
      
      
const handleSubmit=(e)=>{
     e.preventDefault();
    //Edit Profile Details
     console.log("Edit Profile: Checking the data that will be sent",userData);
      axios({
          method:"PUT",
          url:"http://localhost:5000/api/user/61e10d28bec0ad4c037cec2e",
          data:{userData}
      }).then(response => {
          console.log("Edit Profile is Successful",response);
          const result = response?.data;
          console.log(result)
          try {
            dispatch({ type: UPDATEMYDETAILS, data: { result } });
            setShowForm(false);
            if(result.role === 'student'){
              navigate('/studentprofile');
            }
            navigate('/teacherprofile');
          }
          catch(error){
              console.log("Error: ",error)
          }
      })
      clear(); 
}

const changeHandler = (event) => {
  
  if((event.target.files[0]?.size / 1048576) > 2)
  { 
  setSelectedFile('large');
  document.getElementById('file').value= null;
  }
  else{
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  }

};

const clear = () => {
      setCurrentId(0);
      setUserData({ phno:'', bloodgroup:'', fatherName:'', motherName:'', fatherPhone:'',motherPhone:'' });
}
return(
    <Paper className={classes.paper} >
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">Edit Your Profile</Typography>

      <TextField 
            name="phno" 
            variant="outlined" 
            type="number"
            label="Phone Number" fullWidth 
            value={userData.phno} 
            onChange={(e) => setUserData({ ...userData, phno: e.target.value })} />
    <TextField 
                name="bloodgroup" 
                variant="outlined" 
                label="Blood Group" fullWidth 
                value={userData.bloodgroup} 
                onChange={(e) => setUserData({ ...userData, bloodgroup: e.target.value })} />
      <TextField 
            name="fatherName" 
            variant="outlined" 
            label="Father's Name" fullWidth 
            value={userData.fatherName} 
            onChange={(e) => setUserData({ ...userData, fatherName: e.target.value })} />
        <TextField 
            name="motherName" 
            variant="outlined" 
            label="Mother's Name" fullWidth 
            value={userData.motherName} 
            onChange={(e) => setUserData({ ...userData, motherName: e.target.value })} />
        <TextField 
            name="fatherPhone" 
            variant="outlined" 
            type='number'
            label="Father's Phone" fullWidth
            value={userData.fatherPhone} 
            onChange={(e) => setUserData({ ...userData, fatherPhone: e.target.value })} />
        <TextField 
            name="motherPhone" 
            variant="outlined" 
            type="number"
            label="Mother's Phone" fullWidth 
            value={userData.motherPhone} 
            onChange={(e) => setUserData({ ...userData, motherPhone: e.target.value })} />

            <div style={{marginTop:'20px'}}>
                <input type="file" name="file" onChange={changeHandler} id="file"/>
                {setIsFilePicked ? (
                      <div >{selectedFile === 'large' ?	<p style={{color:'red'}}>File Size Cannot be greater than 200MB</p>: <p></p> }
                      </div>
                    ) : (<p></p>)}</div>
    
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
    );
}
export default EditProfileForm;