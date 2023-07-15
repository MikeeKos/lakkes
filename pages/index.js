import FeaturedPosts from "../components/home-page/featured-posts";
import React from "react";
import { connectDatabase } from "../helpers/db-util";
import Lake from "../models/lake";

function HomePage(props) {
  return (
    <React.Fragment>
      <FeaturedPosts lakes={props.lakes} />
    </React.Fragment>
  );
}

// Retrieves lakes data from mongodb database
export async function getServerSideProps() {
  //Establish connection to the database
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return;
  }

  const result = await Lake.find({});
  const lakes = result.map((doc) => {
    const lake = doc.toObject();
    lake._id = lake._id.toString();
    return lake;
  });

  return { props: { lakes: lakes } };
}

export default HomePage;
