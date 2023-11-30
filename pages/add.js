import Head from "next/head";
import React from "react";
import LakeForm from "../components/create-or-edit/lakeForm";

function NewLakePage() {
  const lakeForm = {
    title: "",
    description: "",
    location: "",
    longitude: "",
    latitude: "",
  };

  return (
    <React.Fragment>
      <Head>
        <title>Lakkes - Form</title>
        <meta
          name="description"
          content="Share your amazing place with other people"
        />
      </Head>
      <LakeForm formId="add-lakeform" lakeForm={lakeForm} forNewLake={true} />
    </React.Fragment>
  );
}

export default NewLakePage;
