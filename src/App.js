import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Ejuice from './components/ejuice/Ejuice'
import Disposables from './components/disposables/Disposables'
import Hardware from './components/hardware/Hardware'
import Contact from './components/contact/Contact'
import ProductsPage from './components/products-page/ProductsPage'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';





function App() {

// const [catalogs, setCatalog] = useState([])
const [ejuice, setEjuice] = useState([])
const [disposables, setDisposables] = useState([])
const [hardware, setHardware] = useState([])
const[categoryProducts, setCategoryProducts] = useState([])
const[image, setImage] = useState("")


const fetchCatalogs = () => {
  fetch('http://_127381370573dde21b15dda4170e5854.salish-distro-backend-dev2.us-west-2.elasticbeanstalk.com')
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
          <Route path='/ejuice' element={<Ejuice ejuice={ejuice} setProducts={setCategoryProducts} setImage={setImage}/>}/>
          <Route path='/disposables' element={<Disposables disposables={disposables} setProducts={setCategoryProducts} setImage={setImage}/>}/>
          <Route path='/hardware' element={<Hardware hardware={hardware} setProducts={setCategoryProducts} setImage={setImage}/>}/>
          <Route path='/contact' element={<Contact/>} theme={theme} />
          <Route path='/products' element={<ProductsPage products={categoryProducts} image={image}/>}/>
          
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
