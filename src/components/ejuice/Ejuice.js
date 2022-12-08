import React from 'react'
import EjuiceBrandCard from '../EjuiceBrandCard'
import "./Ejuice.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Ejuice = ({ejuice}) => {


const renderEjuiceBrandCards = () => {
  return ejuice.brands ? ejuice.brands.map((brand) => {
    return <EjuiceBrandCard key={brand.id} brand={brand} />
  }) : null
}

  
  return (
    <div className="ejuice">
    Ejuice
    <div className="brand-cards">
    {renderEjuiceBrandCards()}
    </div>
    <div className="pagination">
    <Stack spacing={2}>
      <Pagination count={10} color="primary"  />
    </Stack>
    </div>
    </div>
  )
}

export default Ejuice