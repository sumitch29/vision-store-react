import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../reducer/product-reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [productState, productDispatch] = useReducer(ProductReducer, {
		productsList: [],
		sortBy: "",
		rating: "",
		price: 200000,
		categories: {
			Apple: false,
            Samsung: false,
			Redmi: false,
			Realme: false,
			Oneplus: false,
            Oppo: false,
		},
	});

	return (
		<ProductContext.Provider value={{ productState, productDispatch }}>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
