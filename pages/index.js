import FeaturedPosts from "../components/home-page/featured-posts";
import React from "react";

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

function HomePage() {
  return (
    <React.Fragment>
      <FeaturedPosts lakes={DUMMY_LAKES} />
    </React.Fragment>
  );
}

export default HomePage;
