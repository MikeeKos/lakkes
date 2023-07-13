// List of objects like this
// {
//   title: "...",
//   image: "image.png",
//   excerpt: "...",
//   date: "2022-02-10",
//   slug: "link-to-single-object",
// }

import classes from "./featured-posts.module.css";
import LakesGrid from "../lakes/lakes-grid";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <LakesGrid lakes={props.lakes} />
    </section>
  );
}

export default FeaturedPosts;
