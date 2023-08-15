//This page should render map, logo and then underneath it should be FeaturedPost
//only couple of (6 or 8), selected by most recent
//at the end should be footer
//AUTH: this page shouldn't be protected
//props.lakes: is a table of objects that look like this:
// {
//   _id: '64b28866329a7a2f5e3700b0',
//   title: '...',
//   description: '...',
//   location: '...',
//   __v: 0
// }

import FeaturedPosts from "../components/home-page/featured-posts";
import React from "react";
import { connectDatabase } from "../helpers/db-util";
import Lake from "../models/Lake";
import mongoose from "mongoose";
import CluserMap from "../components/home-page/cluser-map";
import FirstView from "../components/home-page/first-view";

//Add it to, when loading state on every page (probably in context API)
// import classes from "./index.module.css";

function HomePage(props) {
  //create refresh after server wasn't used for some time
  return (
    <React.Fragment>
      <div>
        <FirstView lakes={props.lakes}/>
        <FeaturedPosts lakes={props.lakes} />
      </div>
    </React.Fragment>
  );
}

// Retrieves lakes data from mongodb database
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

export default HomePage;
