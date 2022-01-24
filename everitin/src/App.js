import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { getPosts } from './actions/posts';
import NavBar from './components/Navbar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './components/Announcement/styles';
import MainComponent from './components/MainComponent';
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getPosts());
        }, [currentId, dispatch]);

    return ( 
    <Container max-width='lg'>
        <MainComponent />
     </Container >

    );
}
export default App;