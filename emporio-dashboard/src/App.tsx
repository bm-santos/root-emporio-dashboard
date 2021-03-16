import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import theme from './styles'
import "./styles/index.css"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: 'green',
                color: 'white'
              },
            },
            error: {
              style: {
                background: 'red',
                color: 'white'
              },
            },
          }} />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
