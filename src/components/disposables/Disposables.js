import React from 'react'
import DisposablesBrandCard from '../DisposablesBrandCard'
import "./Disposables.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Disposables = ({disposables, setProducts, setImage}) => {

  const renderDisposablesBrandCards = () => {
    return disposables.brands ? disposables.brands.map((brand) => {
      return <DisposablesBrandCard key={brand.id} brand={brand} setProducts={setProducts} setImage={setImage}/>
    }) : null
  }

  return (
    <div className="disposables">
    Disposables
    <div className="brand-cards">
    {renderDisposablesBrandCards()}
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