import React from 'react';
import styles from './Header.module.css'
import img from './img/pizza-label.png'
import basket from './img/basket.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {

    const totalPrice = useSelector((state) =>  state.cartReducer.totalPrice )
    const totalCount = useSelector((state) =>  state.cartReducer.totalCount )
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <div className={styles.img_container}><img  className={styles.img} src={img} alt="React-Pizza"/></div>
                <div>
                    <div className={styles.title}>REACT PIZZA</div>
                    <div className={styles.title__item}>самая вкусная пицца во вселенной</div>
                </div>
            </div>

            <Link to="/cart" exact style={{ textDecoration: 'none' }}>
                <div className={styles.basket}>
                    <div className={styles.summ}>{totalPrice} ₽</div>
                    <img className={styles.basket_img} src={basket} alt="" />
                    <div>{totalCount}</div>
                </div>
            </Link>

        </div>
    );
};

export default Header;