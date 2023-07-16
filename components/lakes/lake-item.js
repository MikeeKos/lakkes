//props.lake: is an object that look like this:
// {
//   _id: '64b28866329a7a2f5e3700b0',
//   title: '...',
//   description: '...',
//   location: '...',
//   __v: 0
// }

import Link from "next/link";
import Image from "next/legacy/image";
import classes from "./lake-item.module.css";

//last element of the prop chain, that renders clickable card in grid of items on home page and list page
function LakeItem(props) {
  return (
    <li className={classes.post}>
      <Link href={`/list/${props.lake._id}`}>
        <div className={classes.image}>
          <Image
            src="/image.png"
            alt="Hello"
            width={300}
            height={200}
            //it will shring and grow with container
            layout="responsive"
            placeholder="blur"
            blurDataURL={"/image.png"}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.lake.title}</h3>
          <p>The excerpt</p>
        </div>
      </Link>
    </li>
  );
}

export default LakeItem;
