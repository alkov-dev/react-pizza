import React from 'react';
import styles from './PizzaList.module.css'
import { useSelector, useDispatch} from 'react-redux';
import { setAddCart} from '../../redux/actions/cart';
import './style.css'
import PizzaBlock from './PizzaBlock';


const PizzaList = () => {
    const dispatch = useDispatch()
    //Получаем данные из хранилища====================================
    const pizzas = useSelector((state) =>  state.pizzasReducer.items )
    const cartItems = useSelector((state) =>  state.cartReducer.items )
    //Данные получены!!!===================================================
    const types = ['тонкое', 'традиционное']
    const availibleSize = [26, 30, 40]

    // console.log(cartItems)    

    const addPizzaToCart = (obj) => {
        dispatch(setAddCart(obj))
    }    
    
    return (
        <div className={styles.container}>
                        {
                pizzas.map((pizzaItem) => (
                    <PizzaBlock 
                        pizzaItem={pizzaItem}
                        types={types}
                        availibleSize={availibleSize}
                        addPizzaToCart={addPizzaToCart}
                        key={pizzaItem.id}
                        addedCount={cartItems[pizzaItem.id] && cartItems[pizzaItem.id].items.length}

                    />
                       
                ))

            }

        </div>
    );
};

export default PizzaList;