import React from 'react';
import '../style.css';
import Type from './Type';
import NavBar from './navbar';


import { motion } from 'framer-motion';
import Footer from './footer';

function Resume() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = '/assets/yuvraj-resume1.1.pdf';
        link.download = "yuvraj-resume1.1.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <NavBar />
            <div className="container-fluid resume">
                <div  >


                    <pre  className="title">

                        <Type text="Resume" />
                    </pre>
                </div>
                
                <motion.div initial={{ opacity: 0, y: +100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} className='resumeimgdiv'>
                    <img className='resumeimg' src={process.env.PUBLIC_URL + '/assets/yuvraj_resume_page-0001.jpg'} alt="resumeimage" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: +100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} style={{ margin: "30px", textAlign: "center" }}>
                    <button className="download-btn" onClick={handleDownload}>
                      <i className='fas fa-download'></i>&nbsp; Download Resume
                    </button>
                </motion.div>

            </div>
            <Footer/>
        </>
    );
}

export default Resume;