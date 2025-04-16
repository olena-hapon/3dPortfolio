import React from 'react';
import Project from './Project';
import styles from './portfolio.module.css';


const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'React Desire Store',
    desc: 'A single-page application implements online store functionality. User can browse products, add them to the cart and favorites, search products, sort products, change the quantity of products in the cart and view product details. Layout is adaptive and responsive as well as cross-browser compatible. It works correctly on all screen sizes (mobile, tablet and desktop versions). Technologies used: React, React Router, TypeScript, JavaScript, LoDash, Fetch, API, Sass (SCSS), BEM methodology',
    img: './works/desire4.png',
    link:'https://olena-hapon.github.io/desire-store/',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'React Phone Store',
    desc: 'A single-page application implements online store functionality. User can browse products, add them to the cart and favorites, search products, sort products, change the quantity of products in the cart and view product details. Layout is adaptive and responsive as well as cross-browser compatible. It works correctly on all screen sizes (mobile, tablet and desktop versions). Technologies used: React, React Router, TypeScript, JavaScript, LoDash, Fetch, API, Sass (SCSS), BEM methodology.',
    img: './works/store4.png',
    link: 'https://olena-hapon.github.io/react_phone-catalog/',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Dia Landing',
    desc: 'Landing page for Dia store. Presents the company itself, team, and services. Describes the benefits of the company. Contains a form for sending a request for a consultation. Layout is adaptive and responsive as well as cross-browser compatible. It works correctly on all screen sizes (mobile, tablet and desktop versions). Technologies used: HTML, CSS, SCSS, JavaScript, BEM methodology.',
    img: './works/dia4.png',
    link: 'https://olena-hapon.github.io/layout_dia/',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Miami',
    desc: 'Landing page for Miami company. Presents the company itself, team, and services. Describes the benefits of the company. Contains a form for sending a request for a consultation. Layout is adaptive and responsive as well as cross-browser compatible. It works correctly on all screen sizes (mobile, tablet and desktop versions). Technologies used: HTML, CSS, SCSS, JavaScript, BEM methodology.',
    img: './works/miami.png',
    link: 'https://olena-hapon.github.io/layout_miami/',
  },
  {
    id: 5,
    color: 'from-red-300 to-blue-300',
    title: '2048 game',
    desc: '2048 is a single-player sliding block puzzle game. The game’s objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.',
    img: './works/game4.png',
    link: 'https://olena-hapon.github.io/js_2048_game/',
  },
  {
    id: 6,
    color: 'from-red-300 to-blue-300',
    title: 'React Todo App',
    desc: 'A single-page application that allows users to create and manage a list of tasks. Technologies used: React, React Router, TypeScript, JavaScript, Sass (SCSS), BEM methodology.',
    img: './works/todo4.png',
    link: 'https://olena-hapon.github.io/react_todo-app/',
  },
  {
    id: 7,
    color: 'from-red-300 to-blue-300',
    title: 'Social media Next.js',
    desc: 'This project is a modern full‑stack social media application built with Next.js 15 and MySQL, featuring real‑time notifications powered by Socket.io. It demonstrates server‑side rendering, efficient database management, and live communication between users, making it a comprehensive tutorial for building scalable, real‑time social media platforms.',
    img: './works/social.png',
    link: 'https://github.com/olena-hapon/Social',
  },
  {
    id: 8,
    color: 'from-red-300 to-blue-300',
    title: 'Animated Portfolio Next.js',
    desc: 'This project is an animated portfolio website built with Next.js, using Framer Motion for smooth animations and Tailwind CSS for responsive styling. It showcases creative projects with dynamic transitions and interactive effects for a modern, attractive presentation.',
    img: './works/portfolio.png',
    link: 'https://olena-hapon.github.io/Portfolio/about',
  }
]

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      {items.map((project, index) => (
        <Project key={project.id} project={project} index={index}  isLast={index === items.length - 1}/>
      ))}
    </div>
  );
};

export default Portfolio;
