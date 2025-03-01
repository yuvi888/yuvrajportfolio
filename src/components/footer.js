import React from 'react'
import Type from './Type'
import '../style.css'
import { motion } from 'framer-motion'
function Footer() {
    return (
        <motion.footer
            className="Container-fluid footer"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
        >
           <div className="foodiv1">
           <div>
            <p className='pb-5' style={{color:'white' , fontSize:'1rem',fontWeight:'bold'}}><Type text="Get in touch with me on social links" /></p>
            </div>
           
           
            
            <motion.div className='foodiv1div2'   initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
            viewport={{ once: false }}>
            <div className='footercard'>
           <a href="https://www.linkedin.com/in/yuvraj-yadav-1a5b101b0/"><i className="fab fa-github"> </i></a>
           <p>Github</p>
           </div>
           <div className='footercard'>
           <a href="https://www.linkedin.com/in/yuvraj-yadav-1a5b101b0/"><i className="fab fa-linkedin"> </i></a>
           <p>linkedin</p>
           </div>
           <div className='footercard'>
           <a href="https://www.linkedin.com/in/yuvraj-yadav-1a5b101b0/"><i className="fab fa-instagram"> </i></a>
           <p>instagram</p>
           </div>
           <div className='footercard'>
           <a href="https://www.linkedin.com/in/yuvraj-yadav-1a5b101b0/"><i className="fab fa-whatsapp"> </i></a>
           <p>whatsapp</p>
           </div>
           <div className='footercard'>
           <a href="https://www.linkedin.com/in/yuvraj-yadav-1a5b101b0/"><i className="fab fa-facebook"> </i></a>
           <p>facebook</p>
           </div>

           </motion.div>
            </div>
          
           <div className="foodiv2 footercard1">
              
                <p style={{color:"white",}}>&copy;&nbsp;Designed and Developed by Yuvraj Yadav&nbsp;2025</p>
                
                
           </div>
        </motion.footer>
    )
}

export default Footer