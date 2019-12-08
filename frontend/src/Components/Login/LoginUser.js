import React from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import './Login.css';
import { GoogleLogin } from 'react-google-login';

function LoginUser() {

     const responseGoogle = (response) => {
        console.log(response)
        // console.log(response.Zi.id_token);
        // console.log(response.profileObj.email);
        // console.log(response.profileObj.name);
        // console.log(response.profileObj.googleId);
    }

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
                  <Grid item style = {{ margin : 'auto' }}>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                  </Grid>
                  <Grid item style = {{ margin : 'auto' }}>
                  OR
                  </Grid>
                  <Grid item style = {{ margin : 'auto' }}>
                  <GoogleLogin 
                        clientId="730841097847-nco6b2rmnq0thi23jd6es4orc8nsukd0.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                 </Grid>
              </Grid>
            </Paper>)
}

export default LoginUser;