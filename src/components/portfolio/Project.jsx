import { motion } from 'framer-motion';
import styles from './portfolio.module.css';

const Project = ({ project, index, isLast }) => {
  console.log(index)
  const isEvenPair = index % 2 === 0;
  const containerClass = isEvenPair
  ? `${styles.row} ${styles.normal}`
  : `${styles.row} ${styles.reverse}`;

  return (
    <motion.a
      href={project.link}
      target='blanc'
      className={`${styles.project} ${containerClass} `}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6 }
        }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
        >
          {project.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <p>{project.desc}</p>
      </motion.div>
      <div className={styles.image}>
        <img
          src={project.img}
          alt={project.title}
          className={styles.img}
        />
        {!isLast && (
          <>
            <motion.div
              className={`${styles.line} ${styles['line-vertical-top']}`}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
            />
            <motion.div
          className={`
            ${styles.line}
            ${styles['line-horizontal']}
            ${isEvenPair ? styles.left : styles.right}
          `}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false }}
            />
            <motion.div
              className={`${styles.line} ${styles['line-vertical-bottom']}`}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: false }}
            />
          </>
        )}
      </div>
      
    </motion.a>
  );
};

export default Project;

