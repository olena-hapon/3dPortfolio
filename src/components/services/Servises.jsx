import React, { useRef } from 'react';
import styles from './servises.module.css';
import ComputerContainer from './computer/ComputerContainer';
import { animate } from 'motion';
import { motion, useInView } from 'motion/react';


const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}
const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const scills = [
  {
    id: 1,
    img: "./scills/css.png",
    title: "CSS",
  },
  {
    id: 2,
    img: "./scills/html.png",
    title: "HTML",
  },
  {
    id: 3,
    img: "./scills/js.png",
    title: "JS",
  },
  {
    id: 4,
    img: "./scills/react.png",
    title: "REACT",
  },
  {
    id: 5,
    img: "./scills/next.svg",
    title: "NEXT.JS",
  },
  {
    id: 6,
    img: "./scills/redux.png",
    title: "REDUX",
  },
  {
    id: 7,
    img: "./scills/json.png",
    title: "JSON",
  },
  {
    id: 8,
    img: "./scills/figma.png",
    title: "FIGMA",
  },
  {
    id: 9,
    img: "./scills/git.png",
    title: "GIT",
  },
  {
    id: 10,
    img: "./scills/github.png",
    title: "GITHUB",
  },
  {
    id: 11,
    img: "./scills/sass.png",
    title: "SASS",
  },
  {
    id: 12,
    img: "./scills/ts.png",
    title: "TS",
  },
  {
    id: 13,
    img: "./scills/vscode.png",
    title: "VS CODE",
  },
  {
    id: 14,
    img: "./scills/api.png",
    title: "API",
  },
  {
    id: 15,
    img: "./scills/database.png",
    title: "DATA BASE",
  },
  {
    id: 16,
    img: "./scills/database.png",
    title: "DATA BASE",
  },
];

const Servises = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-200px"});

  return (
    <div className={styles.scills} ref={ref}>
      <div className={`${styles.sScills} ${styles.left}`}>
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className={styles.mainTitle}
        >
          My scills?
        </motion.h1>
        <motion.div
          className={styles.list}
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
          {scills.map((scill) => (
            <motion.div
              variants={listVariants}
              className={styles.scill} 
              key={scill.id}
            >
              <div className={styles.icon}>
                <img className={styles.img} src={scill.img} alt="" />
              </div>
              <div className={styles.info}>
                <h2>{scill.title}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className={`${styles.sScills} ${styles.right}`}>
        <ComputerContainer />
      </div>
    </div>
  )
}

export default Servises