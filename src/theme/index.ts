import Button from './components/Button';
import { createTheme } from '@mui/material/styles';

export const csTheme = createTheme({
  palette: {
    primary: {
      main: '#0042EC',
    },
    secondary: {
      main: '#B42318',
    },
    text: {
      primary: '#0042EC',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: Button,
  },
});
