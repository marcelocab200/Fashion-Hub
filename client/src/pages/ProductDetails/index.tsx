import React from 'react';

import styles from './index.module.scss';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Button from 'src/components/Button';

export default function ProductDetails() {
    return (
        <div className={styles["Product-Details"]}>
            <Header />
            <main>
                <div className={styles["Image-section"]}>
                    <img id={styles["Main-img"]} style={{backgroundImage: 'url(https://images.tcdn.com.br/img/img_prod/1014355/dress_party_franchesca_905181_1_167f20b13e33309a08b2bf4f28973c3e.jpg)'}}/>
                    <div className={styles["Gallery"]}>
                        <img style={{backgroundImage: 'url(https://images.tcdn.com.br/img/img_prod/1014355/dress_party_franchesca_905181_1_167f20b13e33309a08b2bf4f28973c3e.jpg)'}}/>
                        <img style={{backgroundImage: 'url(https://images.tcdn.com.br/img/img_prod/1014355/dress_party_franchesca_905181_1_167f20b13e33309a08b2bf4f28973c3e.jpg)'}}/>
                        <img style={{backgroundImage: 'url(https://images.tcdn.com.br/img/img_prod/1014355/dress_party_franchesca_905181_1_167f20b13e33309a08b2bf4f28973c3e.jpg)'}}/>
                    </div>
                </div>
                <div className={styles["Order-section"]}>
                    <h2>Elegant Summer Dress</h2>
                    <p>A beautiful and elegant summer dress made from high-quality materials. Perfect for any occasion.</p>
                    <div>
                    </div>
                    <p>Available sizes</p>
                    <div className={styles["Available-sizes"]}>
                        <Button>S</Button>
                        <Button>M</Button>
                        <Button>L</Button>
                        <Button>XL</Button>
                        </div>
                    <Button>Add to cart</Button>
                    <a href="/ProductCatalog">Back to catalog</a>
                </div>
            </main>
            <Footer />
        </div>
    )
}