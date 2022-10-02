const { typeDefs } = require("../schema");

exports.Query = {
  hello: () => {
    return "Hello";
  },
  products: (parent, { filters }, { products }) => {
    let filteredProducts = products;
    if (filters) {
      if (filters.onSale != null)
        filteredProducts.filter((product) => product.onSale === filters.onSale);
    }

    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { reviews }) => reviews,
};
