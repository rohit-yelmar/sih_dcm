import {CssBaseline,ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate,Routes,Route } from 'react-router-dom';
import { themeSettings } from 'theme';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Overview from "scenes/overview"
import CalendarComponent from "scenes/calendar"
import Meeting from 'scenes/meetings';


function App() {
  const mode = useSelector((state)=>state.global.mode)
  const theme = useMemo(()=>createTheme((themeSettings(mode)),[mode]))
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/calendar' element={<CalendarComponent />} />
              <Route path='/Meetings' element={<Meeting />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
