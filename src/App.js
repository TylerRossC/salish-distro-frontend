import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Ejuice from './components/Ejuice'
import Disposables from './components/Disposables'
import Hardware from './components/Hardware'
import Contact from './components/Contact'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';



function App() {
  
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });
  
  
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/" element={<Navigate to="/home"/>}/> */}
          <Route path='/ejuice' element={<Ejuice/>}/>
          <Route path='/disposables' element={<Disposables/>}/>
          <Route path='/hardware' element={<Hardware/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
