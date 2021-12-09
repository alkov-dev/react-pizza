import React from 'react';
import styles from './CartHeader.module.css'
import img from './img/pizza-label.png'

const CartHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <div className={styles.img_container}><img  className={styles.img} src={img} alt="React-Pizza"/></div>
                <div>
                    <div className={styles.title}>REACT PIZZA</div>
                    <div className={styles.title__item}>самая вкусная пицца во вселенной</div>
                </div>
            </div>



            <div></div>
        </div>
    );
};

export default CartHeader;