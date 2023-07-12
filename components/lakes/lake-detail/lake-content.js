import LakeHeader from "./lake-header";

const DUMMY_LAKE = {
  title: "Some lake",
  image: "image.png",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
  date: "2022-02-10",
  slug: "link-to-some-lake",
  content: "CONTENT ",
};

function LakeContent() {
  return (
    <article>
      <LakeHeader title={DUMMY_LAKE.title} image={DUMMY_LAKE.image} />
      <div>CONTENT</div>
    </article>
  );
}

export default LakeContent;
