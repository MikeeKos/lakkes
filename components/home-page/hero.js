import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* path doesn't need /public */}
        <Image src="/image.png" alt="An image" width={300} height={300} />
      </div>
      <h1>Hi there</h1>
      <p>lorem ipsum - something something</p>
    </section>
  );
}

export default Hero;
