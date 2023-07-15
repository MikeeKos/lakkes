import AllLakes from "../../components/lakes/all-lakes";
import Lake from "../../models/Lake";
import { connectDatabase } from "../../helpers/db-util";
import React from "react";

function AllLakesPage(props) {
  return <AllLakes lakes={props.lakes} />;
}

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

export default AllLakesPage;
