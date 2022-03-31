import '../ProductCard/ProductCard.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

const ProductCard =()=>{
  const[data,setData]=useState([]);
  useEffect(() => {
  
    const getProducts = async () => {
      try {
        const response = await axios.get("api/products");
       
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
       <div className="container">
          <div className="allproduct-box">
            <h1>Showing All Products</h1>
          </div>
          
         <div className='card-container'>
             {data &&
             data.map((product) => (
                 
          <div className="vertical-ecomm">
          <img className="img-vertical" src={product.img} alt="iphone 13 pro max" />
          <p className="brand-name">
            {product.author}<i className="far fa-heart rightheart"></i>
          </p>
          <p className="brand-info">{product.title}</p>
          <p className="price brand-info">{product.price}</p>
          <button className="btn secondary solid-btn secondary-hover">
            <i className="fas fa-shopping-cart cart-center"></i> Add to Cart
          </button>
        </div>
                 ))}</div>
                 </div></div>
  )
}

export default ProductCard