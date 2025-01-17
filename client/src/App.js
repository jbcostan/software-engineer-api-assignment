//import logo from './logo.svg';
//import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';

import { getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import skateboarders from './images/skateboarders.jpg';
import useStyles from './styles';

const App = ()=> {
  const [currentId,setCurrentId]=useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">SkateBoard Market Place</Typography>
        <img className={classes.image} src={skateboarders} alt="skateboarders" height="120"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/> 
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
