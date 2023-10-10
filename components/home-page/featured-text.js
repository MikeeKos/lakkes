import { motion } from "framer-motion";

function FeaturedText() {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
      <motion.span
        animate={{
          x: [-1000, 1000],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 90,
          delay: 5,
        }}
        className="whitespace-nowrap absolute bottom-[1px] text-7xl font-page font-[1000] tracking-tight text-page1 overflow-hidden"
      >
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
      </motion.span>
      <motion.span
        animate={{
          x: [-1000, 1000],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 90,
          delay: 5,
        }}
        className="whitespace-nowrap absolute text-7xl font-page font-[1000] tracking-tight text-pageMenu overflow-hidden"
      >
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
        ↓ fetaured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured ↓ featured
      </motion.span>
    </div>
  );
}

export default FeaturedText;
