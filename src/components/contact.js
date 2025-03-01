import React from "react";
import NavBar from "./navbar";
import Type from "./Type";
import '../style.css';
import {motion} from 'framer-motion';
import Footer from "./footer";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="contact container-fluid">
        <pre className="title">
          <Type text="Contact Me" />
        </pre>
        
        <motion.div  className='contactdiv2'  initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}>
        <form className='form'>
            
            <div className='formdiv'>
                
                <input  className="forminputfield" type="text" 
                    placeholder="Your Name"/>
          
                
                <input  className="forminputfield" type="text" placeholder="Your Email"/>
            
                
                <input  className="messageforminputfield" type="text"   placeholder="Message...."/>
                <input className='formbutton' type='submit' value='     Submit     '/>
            </div>
           
            </form>
        </motion.div>

        <motion.div className="contactdiv1"  initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}>

          <div>

            <i className="fas fa-envelope "></i>
            <span> &nbsp;Email :-  &nbsp; </span>
           yuvrajyadav8855@gmail.com
          </div>
          <div>

            <i className="fas fa-phone "></i>
            <span> &nbsp;Phone :- &nbsp; </span>
         7987969830
          </div>
          <div>

            <i className="fas fa-map-marker-alt "></i>
            <span> &nbsp;Address :- &nbsp;</span>
           Silicon City,Indore,M.P 
          </div>
        </motion.div>
      </div>
     <Footer/>
    </>
  )
}

export default Contact;