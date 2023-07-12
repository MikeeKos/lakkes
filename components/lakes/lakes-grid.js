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
