import React from 'react';
import '../style.css';
import Type from './Type';
import { motion } from 'framer-motion';

function Home2() {
  return (
    <div className='home2 conatiner-fluid' style={{ color: 'white' }} >
       <motion.div className='home2div1' initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}>
      <pre style={{ color: 'rgb(76 201 136)' , fontSize: '150%', marginBottom: '5%'}}>

        <Type text="Introduction"/>
      </pre>
      <p className='font-thin paragraph'> Hello everyone,

        I am Yuvraj Yadav from Kasrawad. I completed my schooling at Swami Vivekanand HS Public School and later graduated from Acropolis Institute of Technology and Research, Indore, with a degree in Information Technology.

        Currently, I am working as a MERN Stack intern at Kangaroo Software Pvt. Ltd., Indore.

        In technical terms, I have knowledge of Java, DSA, Flutter, and the MERN stack.

        Besides coding, I enjoy playing cricket and bike riding.</p>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
    className="home2div2">
                        <img src='/assets/profile.jpg' alt="" />
                    
    </motion.div>
    </div>
  );
}
export default Home2;   