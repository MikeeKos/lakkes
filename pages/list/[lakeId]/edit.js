import { useRouter } from "next/router";
import useSWR from "swr";
import LakeForm from "../../../components/createOrEdit/lakeForm";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditLake = () => {
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

  const lakeForm = {
    title: lake.title,
    description: lake.description,
    location: lake.location,
  };

  // const lakeForm = {
  //   title: "Check",
  //   description: "Check",
  //   location: "Hi",
  // };

  return (
    <LakeForm
      formId="edit-lakeform"
      lakeForm={lakeForm}
      forNewLake={false}
    />
  );
};

export default EditLake;
