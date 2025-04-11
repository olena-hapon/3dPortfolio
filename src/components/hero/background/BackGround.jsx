"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import './BackGround.css';


import React from 'react'

// const BackGround = () => {
//   return (
//     <motion.div
//     className="image-container"
//     initial={{
//       width: '50vmin',   
//       height: '50vh',    
//       rotate: 45,       
//       clipPath: 'polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)', // 
//     }}
//     animate={{
//       width: '99vw',   
//       height: '100vh',  
//       rotate: 0,        
//       clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
//     }}
//     transition={{ duration: 2, ease: "easeInOut" }}
//   >
//     <img
//       src="/avatar2.jpg"
//       alt="Image"
//       className="background-image"
//     />
//   </motion.div>
//   );
// }

// export default BackGround


const BackGround = () => {
  return (
    <motion.div className="image-container">
      <motion.img
        src="/avatar2.jpg"
        alt="Image"
        className="background-image"
        initial={{
          width: '90vw',   // Початкова ширина
          height: '90vh',   // Початкова висота
         
          clipPath: 'polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)', // Початкова форма (ромб)
        }}
        animate={{
          width: '100vw',   // Картинка розгортається на весь екран по ширині
          height: '100vh',   // Картинка розгортається на весь екран по висоті
         
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Форма стає прямокутною
        }}
        transition={{ duration: 0.8, ease: "linear", delay: '0.6' }}
      />
    </motion.div>
  );
}

export default BackGround;