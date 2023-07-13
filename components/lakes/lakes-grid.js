// List of objects like this
// {
//   title: "...",
//   image: "image.png",
//   excerpt: "...",
//   date: "2022-02-10",
//   slug: "link-to-single-object",
// }

import LakeItem from "./lake-item";
import classes from "./lakes-grid.module.css";

function LakesGrid(props) {
  const { lakes } = props;

  return (
    <ul className={classes.grid}>
      {lakes.map((lake) => (
        <LakeItem key={lake.slug} lake={lake} />
      ))}
    </ul>
  );
}

export default LakesGrid;
