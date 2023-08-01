// used for logging users in and logging them out
// {domain}/api/auth/login & {domain}/api/auth/logout

import CredentialProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth";
// import { connectToClient, userExists } from "../../../lib/db";
// import { verifyPassword } from "../../../lib/auth";

import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import { verifyPassword } from "../../../helpers/auth-util";
import User from "../../../models/User";

// NextAuth() executes and returns a handler function
export const authOptions = {
  // object used to configure NextAuth's behaviour
  session: {
    strategy: "jwt",
  },
  secret: process.env.SESSION_SECRET,
  providers: [
    CredentialProvider({
      name: "credentials",
      authorize: async (credentials) => {
        console.log("credentials= ", credentials);

        // const client = await connectToClient();
        // const db = client.db();
        // const user = await userExists(db, "users", {
        //   email: credentials.email,
        // });

        let client;
        try {
          client = await connectDatabase();
        } catch (error) {
          throw new Error("Cannot connect to database");
        }
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          // no user with the entered email
          // client.close();
          console.log("CLOSING CONNECTION");
          mongoose.connection.close();
          throw new Error("No user was found!");
        }

        console.log("user= ", user);

        // found a user with that email address, check for password
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          // client.close();
          console.log("CLOSING CONNECTION");
          mongoose.connection.close();
          throw new Error("Invalid password! Try again!");
        }

        // client.close();
        console.log("CLOSING CONNECTION");
        mongoose.connection.close();

        // authorization succeeded

        // return object that is encoded for JWT token
        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);

// export const authOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.SESSION_SECRET,
//   providers: [],
// };
