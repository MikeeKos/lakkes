import { useRouter } from "next/router";
import useSWR from "swr";
import LakeForm from "../../../components/createOrEdit/lakeForm";
import React from "react";
import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";
import mongoose from "mongoose";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditLake = (props) => {
  // console.log("___ARE PROPS THERE___");
  // console.log(props.images);

  const router = useRouter();
  const { lakeId } = router.query;
  const {
    data: lake,
    error,
    isLoading,
  } = useSWR(lakeId ? `/api/user/${lakeId}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!lake) return null;

  console.log("___LAKE FROM GETSERVERSIDEPROPS____")
  console.log(lake);
  const lakeForm = {
    title: lake.title,
    description: lake.description,
    location: lake.location,
    longitude: lake.geometry.coordinates[0],
    latitude: lake.geometry.coordinates[1],
  };

  return (
    <LakeForm
      formId="edit-lakeform"
      lakeForm={lakeForm}
      forNewLake={false}
      images={props.images}
    />
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const lakeId = params.lakeId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  try {
    const lake = await Lake.findById(lakeId).populate("images");
    const images = lake.images;
    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
    return {
      props: {
        images: JSON.parse(JSON.stringify(images)),
      },
    };
  } catch (error) {
    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default EditLake;
