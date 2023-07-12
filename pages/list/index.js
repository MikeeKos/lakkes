// AllLakesPage will show map and underneath it will be list of
// all lakes with maybe an infinite scroll and lazy loading implemented

import AllLakes from "../../components/lakes/all-lakes";

const DUMMY_LAKES = [
  {
    title: "Some lake",
    image: "image.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "link-to-some-lake",
  },
  {
    title: "Some lake",
    image: "image.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "link-to-some-lake2",
  },
  {
    title: "Some lake",
    image: "image.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "link-to-some-lake3",
  },
  {
    title: "Some lake",
    image: "image.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "link-to-some-lake4",
  },
  {
    title: "Some lake",
    image: "image.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "link-to-some-lake5",
  },
  {
    title: "Some lake",
    image: "image.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "link-to-some-lake6",
  },
];

function AllLakesPage() {
  return <AllLakes lakes={DUMMY_LAKES} />;
}

export default AllLakesPage;
