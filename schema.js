const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    Quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;
