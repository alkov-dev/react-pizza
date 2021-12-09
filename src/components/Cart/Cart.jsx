import React from 'react';
import CartHeader from '../Cart/CartHeader/CartHeader';
import styles from './Cart.module.css'
import CartList from './CartList';
import basket from './img/basket.svg'
import clear from './img/clear_basket.svg'
import back from './img/back.svg'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cart' 
import emptyCart from './img/empty-cart.png'
import { removeCartItem, plusCartItem, minusCartItem} from '../../redux/actions/cart';

const Cart = () => {
   const dispatch = useDispatch()
    const {totalPrice, totalCount, items} = useSelector(({cartReducer}) =>  cartReducer)

    const addedPizzas = Object.keys(items).map(key => {
        return items[key].items[0]
    })

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')){
            dispatch(clearCart())
        }
    }
    const onRemovePizza = (id) => {
        if (window.confirm('Вы действительно хотите удалить пиццу')){
            dispatch(removeCartItem(id))
        }
    }
    const onPlusCartItem = (id) => {
        dispatch(plusCartItem(id))
    }
    const onMinusCertItem = (id) => {
        dispatch(minusCartItem(id))
    }


    return (
        <>
            <CartHeader/>
            {
                totalCount ? (
                    <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.basket}>
                        <img src={basket} alt="Корзина" />
                        <span>Корзина</span>
                    </div>
                    <div className={styles.clear_basket} onClick={onClearCart}>
                        <img src={clear} alt="" />
                        <span >очистить корзину</span>
                    </div>
                </div>
                    {
                        addedPizzas.map(obj =>  
                            <CartList 
                            id={obj.id}
                            name={obj.name}
                            type={obj.type}
                            size={obj.size}
                            imgUrl={obj.imageUrl}
                            totalPrice={items[obj.id].totalPrice}
                            totalCount={items[obj.id].items.length}
                            onRemove={onRemovePizza}
                            onMinus={onMinusCertItem}
                            onPlus={onPlusCartItem}
                        />
                        )
                    }
                <div className={styles.summ_count}>
                    <div>Всего пицц: <span> {totalCount} шт.</span></div>
                    <div>Сумма заказа: <span> {totalPrice} ₽</span></div>
                </div>
                <div className={styles.buttons}>
                    <Link to="/" exact style={{ textDecoration: 'none' }}>
                        <div className={styles.back} >
                           <img src={back} alt="" /> Вернуться назад
                        </div>
                    </Link>
                    <div className={styles.pay}>Оплатить сейчас</div>
                </div>
                <div></div>
            </div>
                )


                : (
                    <div className={styles.container}>
                        <div className={styles.cart}>
                          <h2>
                            Корзина пустая <i>😕</i>
                          </h2>
                          <p>
                            Вероятней всего, вы не заказывали ещё пиццу.
                            <br />
                            Для того, чтобы заказать пиццу, перейди на главную страницу.
                          </p>
                          <img src={emptyCart} alt="Empty cart" />
                          <Link to="/" style={{ textDecoration: 'none' }}>
                            <span className={styles.goBack}>Вернуться назад</span>
                          </Link>
                        </div>
                    </div>
                        
                      
                )
            } 
                


            
        </>
    );
};

export default Cart;