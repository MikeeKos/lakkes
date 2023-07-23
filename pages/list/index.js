import AllLakes from "../../components/lakes/all-lakes";
import Lake from "../../models/Lake";
import { connectDatabase } from "../../helpers/db-util";
import React from "react";
import mongoose from "mongoose";

function AllLakesPage(props) {
  return <AllLakes lakes={props.lakes} />;
}

export async function getServerSideProps() {
  //Establish connection to the database
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }
  
  try {
    const result = await Lake.find({});
    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
    return { props: { lakes: JSON.parse(JSON.stringify(result)) } };
  } catch (error) {
    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default AllLakesPage;