const sortCategory = (state, categories) => {
    const { Apple, Samsung, Redmi, Realme, Oneplus,Oppo } = categories;
    const filterdCategory = [];

    if (
        Apple === false &&
        Samsung === false &&
        Redmi === false &&
        Realme === false &&
        Oneplus === false &&
        Oppo === false
    ) {
        return state;
    }

    if (Apple) {
        const selectCategory = state.filter(
            (item) => item.categoryName === "Apple"
        );
        filterdCategory.push(...selectCategory);
    }
    if (Samsung) {
        const selectCategory = state.filter(
            (item) => item.categoryName === "Samsung"
        );
        filterdCategory.push(...selectCategory);
    }

    if (Redmi) {
        const selectCategory = state.filter(
            (item) => item.categoryName === "Redmi"
        );
        filterdCategory.push(...selectCategory);
    }

    if (Realme) {
        const selectCategory = state.filter(
            (item) => item.categoryName === "Realme"
        );
        filterdCategory.push(...selectCategory);
    }

    if (Oneplus) {
        const selectCategory = state.filter(
            (item) => item.categoryName === "Oneplus"
        );
        filterdCategory.push(...selectCategory);
    }

    if (Oppo) {
        const selectCategory = state.filter(
            (item) => item.categoryName === "Oppo"
        );
        filterdCategory.push(...selectCategory);
    }
    return filterdCategory;
};

const sortProducts = (state, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
        return state.sort((a, b) => b.price - a.price);
    } else if (sortBy === "LOW_TO_HIGH") {
        return state.sort((a, b) => a.price - b.price);
    }
    return state;
};

const ratingProducts = (state, rating) => {
    return state.filter((rate) => rate.rating >= rating);
};

const priceRange = (state, price) => {
    return state.filter((item) => item.price <= price);
};

export { sortProducts, ratingProducts, priceRange, sortCategory };
