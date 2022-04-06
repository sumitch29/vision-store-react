import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71os5DRhuSL._SL1500_.jpg',
    title: "Samsung Galaxy M32 5G (Sky Blue, 8GB, 128GB)",
    author: "Samsung",
    price: 22999,
    categoryName: "Samsung",
    rating:4
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg',
    title: "iPhone 13 Pro Max (Sierra Blue, 1 TB)",
    author: "Apple",
    price: 174900,
    categoryName: "Apple",
    rating:5
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg',
    title: "Apple iPhone 13 (128GB) - Green",
    author: "Apple",
    price: 74900,
    categoryName: "Apple",
    rating:4.5
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg',
    title: "Apple iPhone 12 (128GB) - Blue",
    author: "Apple",
    price: 58999,
    categoryName: "Apple",
    rating:3
  }, 
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SL1500_.jpg',
    title: "Apple iPhone 11 (64GB) - White",
    author: "Apple",
    price: 52990,
    categoryName: "Apple",
    rating:3.5
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/51YXG1bDM5L._SL1024_.jpg',
    title: "Apple iPhone XR (128GB) - (Product) RED",
    author: "Apple",
    price: 42990,
    categoryName: "Apple",
    rating:2
  },
  
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71F4jU7MRUS._SL1500_.jpg',
    title: "Samsung Galaxy M32 (Blue, 6GB RAM, 128GB)",
    author: "Samsung",
    price: 16999,
    categoryName: "Samsung",
    rating:4
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg',
    title: "Samsung Galaxy M12 (Blue,4GB RAM, 64GB)",
    author: "Samsung",
    price: 11499,
    categoryName: "Samsung",
    rating:3
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71Iq9ug6OvL._SL1500_.jpg',
    title: "Redmi Note 11 (White, 4GB, 64GB)",
    author: "Redmi",
    price: 13499,
    categoryName: "Redmi",
    rating:1
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/7155Pasn1aL._SL1500_.jpg',
    title: "Redmi Note 11T 5G (Black 6GB, 128GB)",
    author: "Redmi",
    price: 16999,
    categoryName: "Redmi",
    rating:3
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/81p+EkIvUUL._SL1500_.jpg',
    title: "Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB",
    author: "Redmi",
    price: 8999,
    categoryName: "Redmi",
    rating:1
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71hgVYiuFXL._SL1500_.jpg',
    title: "realme narzo 50A (Blue , 4GB RAM + 64 GB",
    author: "Realme",
    price: 11499,
    categoryName: "Realme",
    rating:3
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71ZPpnZ3DwL._SL1500_.jpg',
    title: "realme narzo 50 (Speed Blue, 6GB RAM+128GB)",
    author: "Realme",
    price: 15499,
    categoryName: "Realme",
    rating:1
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/51QQLhY1wIL._SL1000_.jpg',
    title: "Realme 9i (Prism Blue, 4GB RAM, 128GB",
    author: "Realme",
    price: 14998,
    categoryName: "Realme",
    rating:3
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg',
    title: "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB)",
    author: "Oppo",
    price: 16990,
    categoryName: "Oppo",
    rating:2
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71OhksMR6iL._SL1500_.jpg',
    title: "OPPO F19 (Midnight Blue, 6GB, 128GB)",
    author: "Oppo",
    price: 19990,
    categoryName: "Oppo",
    rating:3
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/61wyD4lG7+L._SL1500_.jpg',
    title: "Oppo A16 (Royal Gold, 4GB RAM, 64GB",
    author: "Oppo",
    price: 13490,
    categoryName: "Oppo",
    rating:4
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg',
    title: "OnePlus Nord CE 2 5G (Bahamas Blue, 8GB, 128GB)",
    author: "Oneplus",
    price: 24999,
    categoryName: "Oneplus",
    rating:5
  },
  {
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/71KVeQql77S._SL1500_.jpg',
    title: "OnePlus Nord 2 5G (Gray Sierra, 8GB, 128GB)",
    author: "Oneplus",
    price: 29990,
    categoryName: "Oneplus",
    rating:4
  },{
    _id: uuid(),
    img:'https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg',
    title: "OnePlus 9 Pro 5G (Pine Green, 12GB, 256GB)",
    author: "Oneplus",
    price: 64999,
    categoryName: "Oneplus",
    rating:5
  },
];
