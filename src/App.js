import './App.css';
import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import Main from './components/Main'

const font = "'Lato', sans-serif"
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff869e',
      light: '#ffc4c4',
      dark: '#a10035',
    },
    secondary: {
      main: '#FFE7BF',
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
