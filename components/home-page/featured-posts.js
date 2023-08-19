//props.lakes: is a table of objects that look like this:
// {
//   _id: '64b28866329a7a2f5e3700b0',
//   title: '...',
//   description: '...',
//   location: '...',
//   __v: 0
// }

// import classes from "./featured-posts.module.css";
import LakesGrid from "../lakes/lakes-grid";

//used in home page, used to split map and grid of lake objects
function FeaturedPosts(props) {
  return (
    <section>
      <h2>Featured Posts</h2>
      <LakesGrid lakes={props.lakes} />
    </section>
  );
}

export default FeaturedPosts;
