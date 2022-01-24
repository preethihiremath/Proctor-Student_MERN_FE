import React from 'react';
import { Container, Typography,Grid } from '@material-ui/core';
import gif from '../images/cutegif.gif'
import useStyles from './styles';

const Home = () => {
const classes=useStyles();
    return ( 
    <Container max-width='lg'>
        <Container style={{marginTop:'100px'}} >
            <Grid container className = { classes.mainContainer }
                justify = "space-between"
                alignItems = "stretch"
                spacing = { 3 } >
                < Grid item xs = { 12 } sm = { 7 } >
                    <img src={gif} width="500" height="500"/></Grid > 
                    <Grid item xs = { 12 } sm = { 5 } >
                            <Typography variant='h4' style={{color:'white',textAlign:'center',alignSelf:'center',marginTop:'100px'}}>Welcome To Student Proctor Website</Typography>
                            <Typography variant='h6' style={{color:'#C0C0C0',textAlign:'center',alignSelf:'center',marginTop:'30px'}}>Please Login to Continue</Typography>
                    </Grid >
            </Grid> 
        </Container >
    </Container >

    );
}
export default Home