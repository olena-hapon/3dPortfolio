import emailjs from '@emailjs/browser';
import { motion, useInView } from "motion/react";
import React, { useRef, useState } from 'react';
import styles from './contact.module.css';
import ContactSvg from './ContactSvg';

const ListVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error)
          setError(true);
        },
      );
  };

  const isInView = useInView(form, { margin: "-200px" })

  return (
    <div className={styles.contact}>
      <div className={styles.cSection}>
        <motion.form
          className={styles.form}
          ref={form}
          onSubmit={sendEmail}
          variants={ListVariant}
          animate={isInView ? "animate" : "initial"}
        >
             <motion.h1 variants={ListVariant} className={styles.title}>
            Let's keep in touch
          </motion.h1>
          <motion.div variants={ListVariant} className={styles.formItem}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder='Olena Hapon'
              name="to_name"
            />
          </motion.div>
          <motion.div variants={ListVariant} className={styles.formItem}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder='olenagapon90@gmail.com'
              name='user_email'
            />
          </motion.div>
          <motion.div variants={ListVariant} className={styles.formItem}>
            <label htmlFor="">Message</label>
            <textarea rows={10} placeholder="Write your message" name="user_message" id=""></textarea>
          </motion.div>
          <motion.button variants={ListVariant} className={styles.formButton}>Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className={styles.cSection}>
        <ContactSvg />
      </div>
    </div>
  )
}

export default Contact