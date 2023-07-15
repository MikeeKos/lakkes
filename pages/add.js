import CreateLakeForm from "../components/createOrEdit/lakeForm";

function NewLakePage() {
  const lakeForm = {
    title: "",
    description: "",
    location: "",
  };

  return (
    <CreateLakeForm
      formId="add-lakeform"
      lakeForm={lakeForm}
      forNewLake={true}
    />
  );
}

export default NewLakePage;
