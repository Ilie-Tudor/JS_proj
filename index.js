const { sequelize } = require("./models");
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const app = express();
const {
  getUserById,
  getUserByName,
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
} = require("./GraphQLRoutes/Users");

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  description: "Root Query",
  fields: () => ({
    getUserById,
    getUserByName,
    getAllUsers,
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "RootMutation",
  description: "Root Mutation",
  fields: () => ({
    createUser,
    updateUserById,
    deleteUserById,
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema: schema,
  })
);
// app.use("/", express.json());
// app.use("/users", usersRoute);

sequelize
  .authenticate()
  .then(() => {
    app.listen(5050, () => {
      console.log("server started");
    });
  })
  .catch(() => {
    console.log("Connection to the database failed");
  });
