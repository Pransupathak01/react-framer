import "./Hero.scss";
import {motion} from "framer-motion"
const textVarients = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },
    scrollButton:{
      y:10,
      opacity:0,
      transition:{
        duration:2,
        repeat:Infinity,
      },
    }
  
}
const sliderVarients = {
  initial:{
    delay:1,
    x: "5%",
  },
  animate:{
    x: "-100%",
    transition:{
      duration: 20, // Adjust duration as needed for smooth sliding
      ease: "linear",
      repeat: Infinity,
    },
  },
}
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div 
        className="textContainer" 
        variants={textVarients} 
        initial="initial"
        animate="animate">
          <motion.h2 variants={textVarients}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVarients}>Web developer and UI designer</motion.h1>
          <motion.div className="buttons" variants={textVarients}>
            <motion.button variants={textVarients}>See the Latest Works</motion.button>
            <motion.button variants={textVarients}>Contact me</motion.button>
          </motion.div>
          <motion.img src="scroll.png" alt="" variants={textVarients} animate="scrollButton"/>
        </motion.div>
      </div>
      <motion.div 
      className="slidingTextContainer" 
      variants={sliderVarients} 
      initial="initial"
      animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/Sample.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
