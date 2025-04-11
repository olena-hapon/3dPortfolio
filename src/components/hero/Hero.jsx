import { motion } from 'motion/react';
import React from 'react';
import BackGround from './background/BackGround';
import styles from './hero.module.css';

const awardsVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

// const girl = {
//   initial: {
//     y: -100,
//     opacity: 0
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//   }
// }

const Hero = () => {
  return (
    <div className={styles.hero}>
      <BackGround />
      <div className={`${styles.hSection} ${styles.left}`}>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          className={styles.hTitle}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hey There,
          <br />
          <span>I'm Olena!</span>
        </motion.h1>
        <motion.div
          variants={awardsVariants}
          initial="initial"
          animate="animate"
          className={styles.about}
        >
          <motion.div className={styles.aboutText} variants={awardsVariants}>
            I'm a Frontend Developer specializing in React, Next.js, HTML, CSS,
            and JavaScript, with experience in state management tools like Redux
            and Redux Toolkit. I have built multiple responsive websites for both
            mobile and desktop devices and successfully integrated them with
            APIs. I have experience working with version control systems like Git. I
            am eager to take on new challenges and apply my coding and
            debugging skills to develop new features and enhance the overall
            user experience.

          </motion.div>
        </motion.div>
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            easy: "easeInOut",
          }}
          href="#services"
          className={styles.scroll}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                easy: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className={`${styles.hSection} ${styles.right}`}>
        <motion.div
          variants={followVariants}
          className={styles.follow}
          initial="initial"
          animate="animate"
        >
          <motion.a
            variants={followVariants}
            href="/"
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="/"
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.div
            variants={followVariants}
            className={styles.followtextContainer}
          >
            <div className={styles.followText}>FOLLOW ME</div>
          </motion.div>
        </motion.div>
        <motion.a
          href="/#contact"
          className={styles.contactLink}
          animate={{
            x: [200, 0],
            opacity: [0, 1]
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            animate={{ rotate: ['0deg', '360deg'] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className={styles.contactButton}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className={styles.circleText}>
                <textPath href='#innerCirclePath'>Hire Now .</textPath>
              </text>
              <text className={styles.circleText}>
                <textPath href='#innerCirclePath' startOffset='45%'>Contact Me .</textPath>
              </text>
            </svg>
            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      <div className={styles.bg}>
        {/* <Canvas>
          <Suspense fallback="loading">
          <Shape />
          </Suspense>
        </Canvas> */}
        <motion.div className={styles.hImg} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 1.6 }}>
          <img src="/girl2.png" alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
