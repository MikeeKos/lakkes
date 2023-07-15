import Link from "next/link";
import Image from "next/legacy/image";
import classes from "./lake-item.module.css";

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
