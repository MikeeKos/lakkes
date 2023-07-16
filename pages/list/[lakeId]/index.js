import React from "react";
import LakeContent from "../../../components/lakes/lake-detail/lake-content";
import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";

function SingleLakePage(props) {
  return (
    <React.Fragment>
      <LakeContent lake={props.lake} />;
    </React.Fragment>
  );
}

export async function getServerSideProps({ params }) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return;
  }

  let lake;
  try {
    lake = await Lake.findById(params.lakeId).lean();
    lake._id = lake._id.toString();
  } catch (error) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  return { props: { lake: lake } };
}

export default SingleLakePage;
