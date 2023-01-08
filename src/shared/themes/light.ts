import { createTheme } from '@mui/material';
import { purple, orange } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: orange[500],
      dark: orange[400],
      light: orange[300],
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0F1F1',
      paper: '#FFFFFF',
    },
  },
});
