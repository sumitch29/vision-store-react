import '../ProductCard/ProductCard.css';
import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import { apiCall } from "../../utilities/product-list-api";
import {
	priceRange,
	ratingProducts,
	sortCategory,
	sortProducts,
} from "../../utilities/filter";

const ProductCard =()=>{
  const { productState, productDispatch } = useProduct();
	const { productsList, rating, sortBy, price, categories } = productState;

	useEffect(() => {
		apiCall(productDispatch);
	}, []);

	const categoryProducts = sortCategory(productsList, categories);
	const rangedProducts = priceRange(categoryProducts, price);
	const ratedProducts = ratingProducts(rangedProducts, rating);
	const sortedProducts = sortProducts(ratedProducts, sortBy);

  return (
    <div>
       <div className="container">
          <div className="allproduct-box">
            <h1>Showing All Products</h1>
          </div>
          
         <div className='card-container'>
         {sortedProducts.map(({img,author,title,rating,price}) => (
                 
          <div className="vertical-ecomm">
          <img className="img-vertical" src={img} alt="iphone 13 pro max" />
          <p className="brand-name">
            {author}<i className="far fa-heart rightheart"></i>
          </p>
          <p className="brand-info">{title}</p>
          <p className='font-s'>Rating: {rating} ⭐</p>
          <p className="price brand-info">{price}</p>
          <button className="btn secondary solid-btn secondary-hover">
            <i className="fas fa-shopping-cart cart-center"></i> Add to Cart
          </button>
        </div>
                 ))}</div>
                 </div></div>
  )
}

export default ProductCard