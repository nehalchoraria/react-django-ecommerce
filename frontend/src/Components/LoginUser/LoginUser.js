import React from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import './LoginUser.css';
import Tooltip from '@material-ui/core/Tooltip';

function LoginUser() {
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
                  <Grid item>
                      <Fingerprint />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField id="username" label="Password" type="password" fullWidth required />
                  </Grid>
              </Grid>
              <Grid container alignItems="center" justify="space-between">
                  <Grid item>
                      <FormControlLabel control={
                          <Checkbox
                              color="primary"
                          />
                      } label="Remember me" />
                  </Grid>
                  <Grid item>
                      <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                  </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                  <Grid item>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                  </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px'  }}>
                  <Grid item style = {{ margin : 'auto' }}>
                  <Tooltip title="Facebook Login">
                      <FacebookIcon style = {{fontSize: "2.5rem"}} />
                  </Tooltip>
                  </Grid>
                  <Grid item style = {{ margin : 'auto' }}>
                      OR
                  </Grid>
                  <Grid item style = {{ margin : 'auto' }}>
                  <Tooltip title="Gmail Login">
                      <MailIcon  style = {{fontSize: "2.5rem"}} />
                  </Tooltip>
                  </Grid>
              </Grid>
            </Paper>)
}

export default LoginUser;