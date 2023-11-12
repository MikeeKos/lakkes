import Lake from "../../models/Lake";
import { connectDatabase } from "../../helpers/db-util";
import React from "react";
import mongoose from "mongoose";
import List from "../../components/lakes/list";

function AllLakesPage(props) {
  return <List lakes={props.lakes}></List>;
}

export async function getServerSideProps() {
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
    mongoose.connection.close();
    return { props: { lakes: JSON.parse(JSON.stringify(result)) } };
  } catch (error) {
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default AllLakesPage;
