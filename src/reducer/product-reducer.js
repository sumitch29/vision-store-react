const ProductReducer = (state, action) => {
	switch (action.type) {
		case "APPLE":
			return {
				...state,
				categories: {
					...state["categories"],
					Apple: !state.categories.Apple,
				},
			};
		case "SAMSUNG":
			return {
				...state,
				categories: {
					...state["categories"],
					Samsung: !state.categories.Samsung,
				},
			};
		case "REDMI":
			return {
				...state,
				categories: {
					...state["categories"],
					Redmi: !state.categories.Redmi,
				},
			};
		case "REALME":
			return {
				...state,
				categories: {
					...state["categories"],
					Realme: !state.categories.Realme,
				},
			};
		case "ONEPLUS":
			return {
				...state,
				categories: {
					...state["categories"],
					Oneplus: !state.categories.Oneplus,
				},
			};
		case "OPPO":
			return {
				...state,
				categories: {
					...state["categories"],
					Oppo: !state.categories.Oppo,
				},
			};

		case "CLEAR":
			return {
				...state,
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
			};
			
		case "API_CALL":
			return { ...state, productsList: action.payload };
		case "HIGH_TO_LOW":
			return { ...state, sortBy: action.type };
		case "LOW_TO_HIGH":
			return { ...state, sortBy: action.type };
		case "4_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "3_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "2_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "1_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "PRICE_SLIDER":
			return { ...state, price: action.payload };

		default:
			return { ...state };
	}
};

export { ProductReducer };
