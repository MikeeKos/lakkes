import React from "react";
import { connectDatabase } from "../helpers/db-util";
import Lake from "../models/Lake";
import mongoose from "mongoose";
import Homepage from "../components/home-page/homepage";

function HomePage(props) {
  return (
    <React.Fragment>
      <div>
        <Homepage lakes={props.lakes} />
      </div>
    </React.Fragment>
  );
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

export default HomePage;
