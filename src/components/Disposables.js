import React from 'react'
import ProductCards from './ProductCards'
import "./Ejuice.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Disposables = () => {
  return (
    <div className="disposables">
    Disposables
    <div className="product-cards">
    <ProductCards/>
    </div>
    <div className="pagination">
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
    </div>
    </div>
  )
}

export default Disposables