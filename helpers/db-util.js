import mongoose from "mongoose";

export async function connectDatabase() {
  const client = await mongoose.connect(process.env.DB_CONNECTION_LINK, {
    dbName: process.env.MAIN_DB_NAME,
  }).then(() => {
    console.log("Connected to Database");
  }).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
  return client;
}