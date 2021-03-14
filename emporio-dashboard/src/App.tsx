import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Toaster } from 'react-hot-toast';
import theme from './styles'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Toaster />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
