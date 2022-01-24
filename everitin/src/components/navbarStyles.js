import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
navbar :{
        display:'flex', 
        padding:'0 4rem',
        justifyContent:'space-between',
        backgroundColor:'#040A2C'
},
navbarBrand :{
 display:'flex',
},

navbarMenu :{
    marginTop:'30px',
    display:'flex',  
    listStyle:'none',
    justifyContent:'right',
    
},
navLink :{
    color:'white',
    textDecoration:'none',
    margin:'1rem 2rem',
    fontSize:'14sp',
    '@media screen and (max-width:654px)':{
        display:'none'
     }

}
});
export default useStyles;