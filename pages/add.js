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
    <LakeForm formId="add-lakeform" lakeForm={lakeForm} forNewLake={true} />
  );
}

export default NewLakePage;
