import NavBar from "./navbar";
import '../style.css';

import Type from './Type';
import React from 'react';
import Home2 from './home2';
import Footer from './footer';
import { motion } from 'framer-motion';
import About from "./about";



function Home() {
    return (
        <>
            <NavBar />
            <main className="container-fluid home">
                <motion.div className="homediv1"  initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}>
                    <pre style={{ color: "rgb(255, 255, 255)", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "medium" }}>
                        Hii, I am
                    </pre>
                    <pre className="display-6 type-container" style={{ color: "rgb(76 201 136)" }}>

                        <Type text="Yuvraj Yadav" />
                    </pre>
                    <pre style={{ color: "rgb(255, 255, 255)", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "small" }}>
                        MERN Stack developer
                    </pre>

                </motion.div>

                <div className="homediv2"  >
                    <img src={process.env.PUBLIC_URL + '/assets/homeimg.jpg'} alt="Description of IMG_20210725_191853" />
                </div>
            </main>

            <Home2 />
            <About/>
            <Footer />


        </>
    )
}
export default Home;