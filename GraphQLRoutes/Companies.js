const { Company } = require("../models");
const { CompanyType } = require("../GraphQLTypes/CompanyType");
const {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLError
} = require("graphql");
const { ValidateToken, ValidateAuthorization } = require("../utils/auth");

module.exports = {
  getCompanyById: {
    type: CompanyType,
    args: {
      company_id: { type: GraphQLString }
    },
    resolve: async (parent, args, context) =>
      await Company.findByPk(args.company_id)
  },

  getCompanyByCompanyName: {
    type: CompanyType,
    args: {
      company_name: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const company = await Company.findOne({
        where: { company_name: args.company_name }
      });
      return company;
    }
  },

  getAllCompanies: {
    type: new GraphQLList(CompanyType),
    resolve: async (parent, args, context) => {
      const companies = await Company.findAll();
      return companies;
    }
  },

  createCompany: {
    type: CompanyType,
    args: {
      company_name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      cui: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (parent, args, context) => {
      const newCompany = await Company.create({
        company_name: args.company_name,
        email: args.email,
        cui: args.cui,
        company_token: String(parseInt(Math.random() * 899999) + 100000),
        password: args.password
      });

      return newCompany;
    }
  },

  updateCompany: {
    type: GraphQLString,
    args: {
      company_name: { type: GraphQLString },
      email: { type: GraphQLString },
      cui: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const { error: authenticationError, userInfo } = ValidateToken(
        context.jwt
      );
      if (authenticationError)
        return new GraphQLError(
          "Unauthenticated\n" + JSON.stringify(authenticationError),
          { status: 401 }
        );

      const { isAuthorized } = ValidateAuthorization(
        context.jwt,
        "company_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;
      const updatedRowsCount = await Company.update(
        {
          company_name: args.company_name,
          email: args.email,
          cui: args.cui,
          company_token: String(parseInt(Math.random() * 899999) + 100000),
          password: args.password
        },
        {
          where: {
            company_id: user_id
          },
          returing: true
        }
      );
      return `Updated ${updatedRowsCount} rows`;
    }
  },

  deleteCompany: {
    type: GraphQLString,
    
    resolve: async (parent, args, context) => {
      const { error: authenticationError, userInfo } = ValidateToken(
        context.jwt
      );
      if (authenticationError)
        return new GraphQLError(
          "Unauthenticated\n" + JSON.stringify(authenticationError),
          { status: 401 }
        );

      const { isAuthorized } = ValidateAuthorization(
        context.jwt,
        "company_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;
      const deletedRowsCount = await Company.destroy(
        {
          where: {
            company_id: user_id
          },
          returing: true
        }
      );
      return `Deleted ${deletedRowsCount} rows`;
    }
  }
};

//   createUser: {
//     type: UserType,
//     args: {
//       user_name: { type: new GraphQLNonNull(GraphQLString) },
//       email: { type: new GraphQLNonNull(GraphQLString) },
//       password: { type: new GraphQLNonNull(GraphQLString) },
//       display_name: { type: new GraphQLNonNull(GraphQLString) },
//       address: { type: GraphQLString },
//       postal_code: { type: GraphQLString }
//     },
//     resolve: async (parent, args, context) => {
//       const newUser = await User.create({
//         user_name: args.user_name,
//         email: args.email,
//         password: args.password,
//         display_name: args.display_name,
//         address: args.address,
//         postal_code: args.postal_code
//       });
//       return newUser;
//     }
//   },

//   updateUserById: {
//     type: GraphQLString,
//     args: {
//       user_name: { type: GraphQLString },
//       email: { type: GraphQLString },
//       password: { type: GraphQLString },
//       display_name: { type: GraphQLString },
//       address: { type: GraphQLString },
//       postal_code: { type: GraphQLString }
//     },
//     resolve: async (parent, args, context) => {
//       const { error: authenticationError, userInfo } = ValidateToken(
//         context.jwt
//       );
//       if (authenticationError)
//         return new GraphQLError(
//           "Unauthenticated\n" + JSON.stringify(authenticationError),
//           { status: 401 }
//         );

//       const { isAuthorized } = ValidateAuthorization(
//         context.jwt,
//         "client_user"
//       );
//       if (!isAuthorized)
//         return new GraphQLError("Unauthorized", { status: 403 });

//       const { user_id } = userInfo;
//       const updatedRowsCount = await User.update(
//         {
//           user_id: user_id,
//           user_name: args.user_name,
//           email: args.email,
//           password: args.password,
//           display_name: args.display_name,
//           address: args.address,
//           postal_code: args.postal_code
//         },
//         {
//           where: {
//             user_id: user_id
//           },
//           returing: true
//         }
//       );
//       return `Updated ${updatedRowsCount} rows`;
//     }
//   },

//   deleteUserById: {
//     type: GraphQLString,
//     resolve: async (parent, args, context) => {
//       const { error: authenticationError, userInfo } = ValidateToken(
//         context.jwt
//       );
//       if (authenticationError)
//         return new GraphQLError(
//           "Unauthenticated\n" + JSON.stringify(authenticationError),
//           { status: 401 }
//         );

//       const { isAuthorized } = ValidateAuthorization(
//         context.jwt,
//         "client_user"
//       );
//       if (!isAuthorized)
//         return new GraphQLError("Unauthorized", { status: 403 });

//       const { user_id } = userInfo;
//       try {
//         const deletedRowsCount = await User.destroy({
//           where: {
//             user_id: user_id
//           }
//         });
//         return `Deleted ${deletedRowsCount} rows`;
//       } catch (err) {
//         return err;
//       }
//     }
//   }
// };
