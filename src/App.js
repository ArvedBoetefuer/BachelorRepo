import './App.css';
import Login1 from './pages/Login1';
import StartScreen from './pages/StartScreen';
import { Box, ThemeProvider, createTheme } from '@mui/system';


const theme = createTheme({
  palette: {
    primary:{
      main: '#004b5a',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login1/>
      </div>
    </ThemeProvider>
  );
}

export default App;
