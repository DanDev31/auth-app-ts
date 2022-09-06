import { Grid, Typography } from '@mui/material'
import React from 'react'
import { themes } from '../../../style/themes.style';
import { SwitchThemeButton } from '../../switch-theme-button/switch-theme-button.component';


interface AuthProps{
  children:React.ReactNode;
  title:string;
  authColor?:string;
}


export const AuthLayout = ({ title, authColor, children }:AuthProps) => {
  return (
      <Grid 
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={ 0 }
        sx={{ backgroundColor:`${themes.light.authColor}`, minHeight:"100vh", padding:4 }}
      > 
      <SwitchThemeButton />
        <Grid
          item
          xs={ 3 }
          sx={{ backgroundColor:"white", borderRadius: 3, padding:3, width:{ sm:450 } }}
        > 
          <Typography variant="h4" sx={{ mb:1 }}>{title}</Typography>
          
          { children }
        </Grid>
        
      </Grid>
    
  )
};
