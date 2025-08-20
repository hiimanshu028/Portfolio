import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Himanshu from "../assets/himanshu.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Use polygon clipPath for smooth animation
const imageVariants = {
  hidden: {
    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    opacity: 0,
  },
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
  },
};

const Hero = () => {
  return (
    <section className="text-white">
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center p-1">
        
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-6 leading-relaxed"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-md md:text-xl lg:text-2xl text-gray-400 mb-6"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            {/* Resume Download */}
            <motion.a
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 inline-block rounded-2xl shadow-lg hover:scale-105 transition-transform"
              href={HERO_CONTENT.resumeLink}
              download
              rel="noopener noreferrer"
              target="_blank"
              variants={textVariants}
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>

            {/* Mail Button */}
            <motion.a
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 inline-block rounded-2xl shadow-lg hover:scale-105 transition-transform"
              href="mailto:hiimanshu028@gmail.com"
              variants={textVariants}
            >
              E-mail 📧
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={Himanshu}
            alt="Himanshu Ahirwar"
            width={650}
            height={650}
            className="rounded-3xl shadow-2xl shadow-purple-500/30 border-4 border-stone-800 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
