import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Ejuice from './components/ejuice/Ejuice'
import Disposables from './components/disposables/Disposables'
import Hardware from './components/hardware/Hardware'
import Contact from './components/contact/Contact'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';




function App() {

// const [catalogs, setCatalog] = useState([])
const [ejuice, setEjuice] = useState([])
const [disposables, setDisposables] = useState([])
const [hardware, setHardware] = useState([])

const fetchCatalogs = () => {
  fetch('http://localhost:3000/catalogs')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setEjuice(data[0].categories[0])
      setDisposables(data[0].categories[1])
      setHardware(data[0].categories[2])
    })}

useEffect(() => {
  fetchCatalogs()
}, [])
  

  let theme = createTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#488FCD',
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar theme={theme} />
      
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/" element={<Navigate to="/home"/>}/> */}
          <Route path='/ejuice' element={<Ejuice ejuice={ejuice}/>}/>
          <Route path='/disposables' element={<Disposables disposables={disposables}/>}/>
          <Route path='/hardware' element={<Hardware hardware={hardware}/>}/>
          <Route path='/contact' element={<Contact/>} theme={theme} />
          
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
