import classes from "./all-lakes.module.css";
import LakesGrid from "./lakes-grid";

function AllLakes(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <LakesGrid lakes={props.lakes}/>
    </section>
  );
}

export default AllLakes;
