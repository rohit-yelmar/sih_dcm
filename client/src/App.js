import {CssBaseline,ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate,Routes,Route } from 'react-router-dom';
import { themeSettings } from 'theme';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Overview from "scenes/overview"
import Calendar from "scenes/calendar"
import Login from "scenes/login"
import Profile from "scenes/profile"


function App() {
  const mode = useSelector((state)=>state.global.mode)
  const theme = useMemo(()=>createTheme((themeSettings(mode)),[mode]))
  const isAuth = Boolean(useSelector((state)=>state.global.token))
  const userId = useSelector((state)=>state.global.userId)
  const user = useSelector((state)=>state.global.user)
  console.log("user",user)
  console.log("userId",userId)
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/login' replace />} />
              <Route path='/dashboard' element={<Dashboard /> } />
              <Route path='/overview' element={<Overview />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/profile' element={<Profile userId={userId} />} />
              
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
