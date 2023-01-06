import React from 'react'
import HardwareBrandCard from '../HardwareBrandCard'
import "./Hardware.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Hardware = ({hardware, setProducts}) => {

  const renderHardwareBrandCards = () => {
    return hardware.brands ? hardware.brands.map((brand) => {
      return <HardwareBrandCard key={brand.id} brand={brand} setProducts={setProducts}/>
    }) : null
  }


  return (
    <div className="hardware">
    Hardware
    <div className="brand-cards">
    {renderHardwareBrandCards()}
    </div>
    <div className="pagination">
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
    </div>
    </div>
  )
}

export default Hardware