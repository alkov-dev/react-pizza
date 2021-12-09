import React from 'react';
import styles from './CartList.module.css'
import vector from './img/Vector.svg'
import inc from './img/inc.svg'
import dec from './img/dec1.svg'

const CartList = ({id, 
    name, 
    type, 
    size, 
    imgUrl, 
    totalPrice, totalCount, onRemove, onPlus, onMinus}) => {
    const handleRemoveClick = () => {
        onRemove(id)
    }
    const handlePlusClick = () => {
        onPlus(id)
    }
    const handleMinusClick = () => {
        onMinus(id)
    }
    return (
        <div className={styles.container}>
            <div className={styles.list_item}>
                <div className={styles.item_cont}>
                    <img src={imgUrl} alt="" />
                    <div className={styles.item_disc}>
                        <div className={styles.item_disc_1}>{name}</div>
                        <div className={styles.item_disc_2}>{type} тесто {size}см</div>
                    </div>
                    </div>
                <div className={styles.count}>
                    <img 
                        onClick={handlePlusClick} 
                        className={styles.button_inc} 
                        src={inc} alt="" />
                    <img 
                        onClick={handleMinusClick} 
                        className={styles.button_dec} 
                        src={dec} alt="" />
                    {totalCount}
                </div>
                <div className={styles.count}>{totalPrice} ₽</div>
                <img onClick={handleRemoveClick} className={styles.vector} src={vector} alt="Удалить" />
            </div>
        </div>
    );
};

export default CartList;