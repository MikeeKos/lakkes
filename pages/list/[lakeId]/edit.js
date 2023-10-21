import { useRouter } from "next/router";
import useSWR from "swr";
import LakeForm from "../../../components/createOrEdit/lakeForm";
import React from "react";
import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";
// import User from "../../../models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]";
import { authOptions } from "../../api/auth/[...nextauth]";

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
  if (isLoading)
    return (
      <div>
        <div className="w-full h-[30rem] border-2 border-pageMenu flex items-center justify-center bg-page1 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]">
          <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden p-5 bg-page1">
            loading...
          </span>
        </div>
      </div>
    );
  if (!lake) return null;

  console.log("___LAKE FROM GETSERVERSIDEPROPS____");
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
  const session = await getServerSession(context.req, context.res, authOptions);
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

  console.log("SESSION ON EDIT PAGE");
  console.log(session);

  try {
    const ownerOfThisPost = await Lake.findById(lakeId).populate("author");
    if (session.user.email !== ownerOfThisPost.author.email) {
      console.log("THIS USER IS NOT OWNER OF THIS LAKE")
      console.log("CLOSING CONNECTION");
      mongoose.connection.close();
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
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
