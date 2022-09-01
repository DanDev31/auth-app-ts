import { ThemeProvider } from '@mui/material/styles';
import { purpleTheme } from './themes/purple-theme';

interface AppThemeProps {
    children:React.ReactNode;
} 

const AppTheme = ({ children }:AppThemeProps) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        { children }
    </ThemeProvider>
  )
}

export default AppTheme;
