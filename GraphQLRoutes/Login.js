const { User } = require("../models");
const { Company } = require("../models");
const { GraphQLString } = require("graphql");
const jwt = require("jsonwebtoken");

module.exports = {
  clientLogin: {
    type: GraphQLString,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (parent, args) => {
      try {
        const user = await User.findOne({
          where: {
            email: args.email,
            password: args.password
          }
        });

        if (user) {
          const secret = process.env.secret;
          const payload = {
            user_id: user.user_id,
            type: "client_user"
          };

          const jwtToken = jwt.sign(payload, secret, { expiresIn: 3600 });

          return jwtToken;
        } else {
          return "Pune credentialele bune baiatu' meu.";
        }
      } catch (err) {
        console.error(err);
        return "Eroare";
      }
    }
  },
  companyLogin: {
    type: GraphQLString,
    args: {
      email: { type: GraphQLString },
      company_token: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async(parent, args) => {
      try {
        const company = await Company.findOne({
          where: {
            email: args.email,
            password: args.password,
            company_token: args.company_token
          }
        });

        if (company) {
          const secret = process.env.secret;
          const payload = {
            user_id: company.company_id,
            type: "company_user"
          };

          const jwtToken = jwt.sign(payload, secret, { expiresIn: 3600 });

          return jwtToken;
        } else {
          return "Pune credentialele bune compania mea.";
        }
      } catch (err) {
        console.error(err);
        return "Eroare";
      }
    }
  }
};
