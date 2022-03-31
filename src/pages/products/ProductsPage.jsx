import React from 'react'
import Filter from '../../components/Filter/Filter'
import ProductCard from '../../components/ProductCard/ProductCard'
import {Navbar} from "../../components/Navbar/Navbar";
const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <ProductCard />
    </div>
  )
}

export {ProductsPage}