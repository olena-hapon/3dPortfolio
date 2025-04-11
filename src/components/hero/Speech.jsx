import React from 'react'
import styles from './speech.module.css';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

const Speech = () => {
  return (
    <motion.div 
      className={styles.bubbleContainer}
      animate={{ opacity:[0,1] }}
      transition={{ duration: 1 }}
    >
      <div className={styles.bubble}>
      <TypeAnimation
      sequence={[
        1000,
        'We produce food for Hamsters',
        1000,
        'Lorem lorem lorem lorem lorem lorem',
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech