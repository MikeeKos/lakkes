import Head from "next/head";
import React from "react";
import LakeContent from "../../../components/lakes/lake-detail/lake-content";
import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";
import mongoose from "mongoose";

function SingleLakePage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Lakkes - {props.lake.title}</title>
        <meta
          name="description"
          content={`${props.lake.title} - you can find it in ${props.lake.location}`}
        />
      </Head>
      <LakeContent lake={props.lake} lakeAuthorName={props.lakeAuthorName} />
    </React.Fragment>
  );
}

export async function getServerSideProps({ params }) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  try {
    const getUserName = await Lake.findById(params.lakeId).populate("author");
    const lakeAuthorName = getUserName.author.username;

    const lake = await Lake.findById(params.lakeId);
    mongoose.connection.close();
    return {
      props: {
        lake: JSON.parse(JSON.stringify(lake)),
        lakeAuthorName: JSON.parse(JSON.stringify(lakeAuthorName)),
      },
    };
  } catch (error) {
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default SingleLakePage;
