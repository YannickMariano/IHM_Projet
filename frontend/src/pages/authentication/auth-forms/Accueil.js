import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
// import ParentComponent from './ParentComponent';

const FirebaseLogin = ({ handleClick }) => {
  // const history = useHistory();

  // const handleRedirect = (path) => {
    // history.push(path);
  // }; 

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Link to="/admin" style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth onCLick = {() => handleClick('admin')}>
            Admin
            </Button>
        </Link>
      </Grid>

      <Grid item>
        <Link to="/prof" style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth onCLick = {() => handleClick('prof')}>
            Professeur
            </Button>
        </Link>
      </Grid>

      <Grid item>
        <Link to="/eleve" style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth onCLick = {() => handleClick('eleve')}>
            Eleve
            </Button>
        </Link>
      </Grid>
      {/* <ParentComponent/> */}
    </Grid>
  );
};

export default FirebaseLogin;
