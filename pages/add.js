// NewLakePage will render a protected form
// Protected - only logged users can access this page

import CreateLakeForm from "../components/create/create-lake";

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
