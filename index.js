const { sequelize } = require("./models");
const jwt = require("jsonwebtoken");
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType } = require("graphql");
require("dotenv").config();

const app = express();
const {
  getUserById,
  getUserByUserName,
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
  addProductToFavoritesById,
  reviewProductById,
  addProductToCartById
} = require("./GraphQLRoutes/Users");
const {
  getCompanyById,
  getAllCompanies,
  getCompanyByCompanyName,
  createCompany,
  updateCompanyById,
  deleteCompanyById
} = require("./GraphQLRoutes/Companies");
const {
  getCategoryById,
  getAllCategories,
  getCategoryByCategoryName
} = require("./GraphQLRoutes/ProductCategories");
const {
  getProductById,
  getAllProducts,
  getProductByProductName,
  addProduct,
  deleteProductById
} = require("./GraphQLRoutes/Products");

const { clientLogin, companyLogin } = require("./GraphQLRoutes/Login");
const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  description: "Root Query",
  fields: () => ({
    getUserById,
    getAllUsers,
    getUserByUserName,

    getCompanyById,
    getAllCompanies,
    getCompanyByCompanyName,

    getCategoryById,
    getAllCategories,
    getCategoryByCategoryName,

    getProductById,
    getAllProducts,
    getProductByProductName
  })
});

const RootMutationType = new GraphQLObjectType({
  name: "RootMutation",
  description: "Root Mutation",
  fields: () => ({
    clientLogin,
    companyLogin,

    createUser,
    updateUserById,
    deleteUserById,
    addProductToFavoritesById,
    reviewProductById,
    addProductToCartById,

    createCompany,
    updateCompanyById,
    deleteCompanyById,
    addProduct,
    deleteProductById
  })
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

const createContext = (req) => {
  return {
    headers: req.headers,
    jwt: req.headers.token,
    payload: jwt.decode(req.headers.token)
  };
};
app.use(
  "/graphql",
  express.json(),
  expressGraphQL((request) => ({
    graphiql: true,
    schema: schema,
    context: createContext(request)
  }))
);

sequelize
  .authenticate()
  .then(() => {
    app.listen(5050, () => {
      console.log("server started on port 5050");
    });
  })
  .catch(() => {
    console.log("Connection to the database failed");
  });
