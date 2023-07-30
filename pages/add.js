// props.lakeForm is:
//   title: "...",
//   description: "...",
//   location: "...",

import LakeForm from "../components/createOrEdit/lakeForm";

function NewLakePage() {
  const lakeForm = {
    title: "",
    description: "",
    location: "",
    longitude: "",
    latitude: "",
  };

  return (
    <LakeForm formId="add-lakeform" lakeForm={lakeForm} forNewLake={true} />
  );
}

export default NewLakePage;
