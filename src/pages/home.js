import React from 'react'
import Main from '../components/main/main'


const Home = ({products, setProducts, convertPrice }) => {
  return (
    <div>
      <Main products={products} setProducts={setProducts} convertPrice={convertPrice} />
    </div>
  )
}

export default Home
