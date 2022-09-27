const { ApolloServer } = require("apollo-server");
const { categories, products, reviews } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Product },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then((url) => {
  console.log("Server is ready at " + url.url);
});
