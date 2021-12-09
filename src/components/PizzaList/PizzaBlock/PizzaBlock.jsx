import React from 'react';
import styles from '../PizzaList.module.css'
import CN from 'classnames'

const PizzaBlock = ({pizzaItem, types, availibleSize, addPizzaToCart, addedCount}) => {
    const [activeType, setActiveType] = React.useState(10)
    const [sizes, setSizes] = React.useState(10)
    const [typeClicked, setTypeClicked] = React.useState(false)
    const [sizeClicked, setSizeClicked] = React.useState(false)

  
    // const onSelectSize = (index) => {
    //     setSizes(index)
    //     console.log(activeType);
    //  }
    //  console.log(sizes);
    // const onSelectType = (index) => {
    //     setActiveType(index)
    //     // console.log(activeType);
    // }
    // console.log(pizzaItem);
    


                    let obj = { 
                        id: pizzaItem.id,
                        imageUrl: pizzaItem.imageUrl,
                        name: pizzaItem.name,
                        price: pizzaItem.price,
                        size: availibleSize[sizes],
                        type: types[activeType],
                    }
                    
                    return (

                        <div className={styles.animation}>
                        <div className={styles.pizza_item}>
                        <img className={styles.pizza_img} src={pizzaItem.imageUrl} alt="" />
                        <div className={styles.pizza_name}>{pizzaItem.name}</div>
                        <div className={styles.pizza_costs}>от {pizzaItem.price} ₽</div>
                        <div className={styles.button__container}>
                            <div className={styles.button_block1}>
                                {types.map((type, index) => {
                                    return(
                                        <div>
                                        <button 
                                            onClick={() => {
                                                setTypeClicked(true)
                                                setActiveType(index)}}
                                            className={CN(
                                                styles.button1, 
                                                activeType === index ? styles.active : '',
                                                pizzaItem.types[index] === 0 ? styles.disabled : '',
                                            )}
                                        >{type}</button>
                                        </div>
                                    )
                                }
                                )}
                               
                            </div>
                            <div className={styles.button_block2}>
                            {availibleSize.map((size, index) => {
                                    return(
                                        <div>
                                        <button 
                                            onClick={() =>  {
                                                setSizeClicked(true)
                                                setSizes(index)} }
                                            className={CN(
                                                styles.button2, 
                                                sizes === index ? styles.active2 : '',
                                                pizzaItem.sizes[index] === 0 ? styles.disabled : '',
                                                )}
                                        >{size} см.</button>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                        <div className={styles.block4}>
                            <div className={styles.pizza_costs}></div>
                                <div className={styles.button_add} onClick={() =>  {
                                    if (typeClicked !== true && sizeClicked !== true) 
                                    {alert('Необходимо выбрать тип теста и размер')}
                                    else if (typeClicked !== true && sizeClicked === true) 
                                    {alert('Необходимо выбрать тип теста')}
                                    else if (typeClicked === true && sizeClicked !== true) 
                                    {alert('Необходимо выбрать размер теста')}
                                    else {addPizzaToCart(obj)}
                                    }}>
                                    
                                    <div>+ Добавить</div>
                                    <div className={styles.addedCount} >{addedCount}</div>
                            </div>
                        </div>
                    </div>

                        </div>





                        )

};

export default PizzaBlock;