import React from 'react';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

export default function RegisterUser(props) {

    return(
    <Paper style = {{boxShadow:`none`}}>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item >
                      <Face />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                  </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item >
                      <EmailIcon />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField id="email" label="Email" type="email" fullWidth autoFocus required />
                  </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                      <Fingerprint />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField id="username" label="Password" type="password" fullWidth required />
                  </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                      <LockIcon />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField id="username" label="Password" type="password" fullWidth required />
                  </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' , paddingTop : '5px' }}>
                  <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Register</Button>
              </Grid>
            </Paper>)
}

