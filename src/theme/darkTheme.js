import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#5a635b",
    },
    secondary: {
      main: "#d1c6b4",
    },  
    background: {
      default: "#a5a5a5"
    }
  }
});

export default theme;