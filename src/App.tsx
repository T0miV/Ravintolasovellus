import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Etusivu from './pages/Etusivu';
import Sivu1 from './pages/Sivu1';
import { CssBaseline } from '@mui/material';
import Sivu2 from './pages/Sivu2';
import Sivu3 from './pages/Sivu3';

const theme = createTheme({
  palette: {
    background: {
      default: "#f7f1f1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          textTransform: 'lowercase',
          color: '#000',
          },
      },
    }
  }
});


const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Etusivu />} />
            <Route path='/Sivu1' element={<Sivu1 />} />
            <Route path='/Sivu2' element={<Sivu2 />} />
            <Route path='/Sivu3' element={<Sivu3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
