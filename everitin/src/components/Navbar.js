import React ,{useState,useEffect} from 'react'
import GoogleLogin from 'react-google-login'
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import useStyles from './navbarStyles';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { AUTH,LOGOUT } from '../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
const NavBar =()=>{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const responseSuccessGoogle=(response) =>{
    console.log(response)
axios({
    method:"POST",
    url:"http://localhost:5000/api/googlelogin",
    data:{tokenId: response.tokenId}
}).then(response => {
    console.log("frontend",response);
    const result = response?.data;
    console.log(result)
    const token = response?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      if(result.role=== 'proctor'){
        navigate('/teacherannouncement');
      }
      else {
        navigate('/studentannouncement')
      }
     
    } catch (error) {
      console.log(error);
    }
})
  }
  const responseErrorGoogle=(response) =>{
    alert('Google Sign In was unsuccessful. Try again later');
}
const logout = () => {
  dispatch({ type: LOGOUT });
  navigate('/');
  setUser(null);
};

useEffect(() => {
  const token = user?.token;
  setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);

    return (
<AppBar  position = "fixed">
         {user?.result ? ( <Toolbar className={classes.navbar}>

<div className={classes.navbarBrand}>
  <AcUnitIcon  height = "60" style={{fontSize:'30px'}}/>
   <Typography variant="h6" style={{marginLeft:'30px'}} >{user?.result.role}</Typography>
</div>

  <ul className={classes.navbarMenu}>
  <li>
     
    </li>
    {user?.result.role === 'proctor' ? <li>
    <Link to="/teacherannouncement" className={classes.navLink}>Announcement</Link>
    </li> : <li>
    <Link to="/studentannouncement" className={classes.navLink}>Announcement</Link>
    </li>}

    {user?.result.role === 'proctor' ? <li>
      <Link to="/meeting" className={classes.navLink}>Meeting Request</Link>
    </li> : <li>
      <Link to="/request" className={classes.navLink}>Request Meeting</Link>
    </li>}
    
    {user?.result.role === 'proctor' ? <li>
      <Link to="/students" className={classes.navLink}>Students</Link>
    </li>: <li> <Link to="/academic" className={classes.navLink}>Academic</Link></li>}
    {user?.result.role === 'proctor' ?<li>
      <Link to="/teacherprofile" className={classes.navLink}>Profile</Link>
    </li> : <li>
      <Link to="/studentprofile" className={classes.navLink}>Profile</Link>
    </li>} 
    <li>
    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
    </li>
  </ul>
</Toolbar>): ( <Toolbar className={classes.navbar}>

<div className={classes.navbarBrand}>
  <AcUnitIcon  height = "60" style={{fontSize:'30px'}}/>
   <Typography variant="h6" style={{marginLeft:'30px'}} >Proctor-Student App</Typography>
</div>

  <ul className={classes.navbarMenu}>
  <li>
      <Link to="/" className={classes.navLink}>Announcement</Link>
    </li>
    <li>
      <Link to="/meeting" className={classes.navLink}>Meeting Request</Link>
    </li>
    <li>
      <Link to="/students" className={classes.navLink}>Students</Link>
    </li>
    <li>
      <Link to="/teacherprofile" className={classes.navLink}>Profile</Link>
    </li>
    <li>
    <GoogleLogin
      clientId="36235614900-hvg42mg4i5fo7gi25v2i5oardb0lcoci.apps.googleusercontent.com"
      buttonText="Login "
      onSuccess={responseSuccessGoogle}
      onFailure={responseErrorGoogle}
      cookiePolicy={'single_host_origin'}
  />
    </li>
  </ul>
</Toolbar>)}
       
      </AppBar>

    );
}
export default NavBar;