import React from 'react';

import styles from './index.module.scss';

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


export default function ShortFooter() {
    return (
        <footer className={styles["Short-footer"]}>
            <div className={styles["Company-info"]}>
                <p id={styles["Company-name"]}>Fashion Hub</p>
                <p>Fast and reliable clothing delivery service!</p>
                <div className={styles["Social-media"]}>
                    <FaInstagram color="white" size={20}/>
                    <FaFacebook color="white" size={20}/>
                    <FaTwitter color="white" size={20}/>
                </div>
            </div>
            <div className={styles["Contact-info"]}>
                <p>Need assistance?</p>
                <p id={styles["Contact-text"]}>Contact our 24/7 customer support</p>
                <div id={styles["Email"]}>
                    <BsFillTelephoneFill color="white" size={20}/>
                    <p>(+55) 12 34567-7890</p>
                </div>
                <div id={styles["Phone"]}>
                    <MdEmail color="white" size={20}/>
                    <p>suporte@fashionhub.com</p>
                </div>
            </div>
        </footer>
    )
}