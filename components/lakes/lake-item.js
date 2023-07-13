// Single object like this
// {
//   title: "...",
//   image: "image.png",
//   excerpt: "...",
//   date: "2022-02-10",
//   slug: "link-to-single-object",
// }

import Link from "next/link";
import Image from "next/image";
import classes from "./lake-item.module.css";

function LakeItem(props) {
  const { title, image, excerpt, date, slug } = props.lake;

  //date won't be formatted
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedImage = `/${image}`;
  const linkPath = `/list/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={formattedImage}
            alt={title}
            width={300}
            height={200}
            //it will shring and grow with container
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>The excerpt</p>
        </div>
        <div className={classes.content}>
          <h3>Not important stuff</h3>
          <p>{excerpt}</p>
          <p>{slug}</p>
        </div>
      </Link>
    </li>
  );
}

export default LakeItem;
