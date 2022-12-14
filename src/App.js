import './App.css';
import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import Main from './components/Main'

const font = "'Lato', sans-serif"
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#DD5353',//#ff869e
      light: '#EDDBC0',//#ffc4c4
      dark: '#B73E3E',//#a10035
    },
    secondary: {
      main: '#DBC8AC',//#FFE7BF
    },
  },
  typography: {
    fontFamily: font,
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Main />
		</ThemeProvider>
  );
}

export default App;
