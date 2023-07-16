//props.lakes: is a table of objects that look like this:
// {
//   _id: '64b28866329a7a2f5e3700b0',
//   title: '...',
//   description: '...',
//   location: '...',
//   __v: 0
// }

import LakeItem from "./lake-item";
import classes from "./lakes-grid.module.css";

//from every object in table props.lakes create card, that is represented by <LakeItem />
function LakesGrid(props) {
  const { lakes } = props;

  return (
    <ul className={classes.grid}>
      {lakes.map((lake) => (
        <LakeItem key={lake._id} lake={lake} />
      ))}
    </ul>
  );
}

export default LakesGrid;
