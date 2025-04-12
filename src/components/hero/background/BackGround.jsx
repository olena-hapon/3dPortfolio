"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import './BackGround.css';


import React from 'react'

const BackGround = () => {
  return (
    <motion.div className="image-container">
      <motion.img
        src="./avatar2.jpg"
        alt="Image"
        className="background-image"
        initial={{
          width: '90vw',
          height: '90vh',
         
          clipPath: 'polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)',
        }}
        animate={{
          width: '100vw',
          height: '100vh',
         
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
        transition={{ duration: 0.8, ease: "linear", delay: '0.6' }}
      />
    </motion.div>
  );
}

export default BackGround;