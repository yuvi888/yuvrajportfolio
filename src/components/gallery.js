import React, { useState } from "react";
import NavBar from "./navbar";
import Type from "./Type";
import "../style.css"; 
import {motion } from 'framer-motion'
import Footer from './footer';

const images = [
    { id: 1, src: process.env.PUBLIC_URL + "/assets/galleryimg/img3.jpg", alt: "Image 1", size: "large" },
    { id: 2, src: process.env.PUBLIC_URL + "/assets/galleryimg/img2.jpg", alt: "Image 2", size: "small" },
    { id: 3, src: process.env.PUBLIC_URL + "/assets/galleryimg/img1.jpg", alt: "Image 3", size: "medium" },
    { id: 4, src: process.env.PUBLIC_URL + "/assets/galleryimg/img5.jpg", alt: "Image 4", size: "large" },
    { id: 5, src: process.env.PUBLIC_URL + "/assets/galleryimg/img4.jpg", alt: "Image 5", size: "small" },
    { id: 6, src: process.env.PUBLIC_URL + "/assets/galleryimg/img6.jpg", alt: "Image 6", size: "medium" },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <NavBar />
            <div className="gallery ">
                <pre  className="title">
                    <Type text="Gallery" />
                </pre>
                <motion.div initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} className="gallery-grid">
                    {images.map((img) => (
                        <img
                            key={img.id}
                            src={img.src}
                            alt={img.alt}
                            className={`gallery-item ${img.size}`}
                            onClick={() => setSelectedImage(img.src)}
                        />
                    ))}
                </motion.div>
            </div>

            {selectedImage && (
                <div className="image-popup" onClick={() => setSelectedImage(null)}>
                    <div className="popup-content">
                        <img src={selectedImage} alt="Full View" />
                    </div>
                </div>
            )}

            <Footer/>
        </>
    );
}

export default Gallery;
