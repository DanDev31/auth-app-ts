import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { themes } from "../../../style/themes.style";
import { AuthLayout } from "../layout/auth-layout.component";




export const Login = () => {
  return (
    <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>  
              <TextField
                label="Email"
                type="email"
                placeholder="user@user.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>  
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              ></TextField>
            </Grid>

            <Grid container sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button variant="contained" sx={{backgroundColor:`${themes.light.authColor}`}} fullWidth>Login</Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
                  <Link component={ RouterLink } color='inherit' to="/auth/register">
                  <Typography>Create an account</Typography>
                  </Link>
                </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
