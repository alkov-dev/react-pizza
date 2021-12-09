import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css'
import CN from 'classnames';
import { useSelector, useDispatch} from 'react-redux';
import { setPizzas} from '../../redux/actions/pizzas';
import axios from 'axios'
import {setCategory, setSortBy} from '../../redux/actions/filters'


const Navigation = () => {

    const { category, sortBy} = useSelector((state) =>  state.filterReducer )
    const dispatch = useDispatch()

    React.useEffect(() => {
        let typePopup = ''
        if (sortBy === 0) typePopup = 'rating' 
        if (sortBy === 1) typePopup = 'price' 
        if (sortBy === 2) typePopup = 'name' 

        if (category!=null) {
            axios.get(`/pizzas?category=${category}&_sort=${typePopup}&_order=asc`).then( ({data}) => {
                dispatch(setPizzas(data));
            })
        } else {
            axios.get(`/pizzas?_sort=${typePopup}&_order=asc`).then( ({data}) => {
                dispatch(setPizzas(data));
            })
        }

    }, [category, sortBy] )



    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef(null)

    const clickOutside = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', clickOutside)
        // console.log(sortRef.current);
    }, [])


    const onSelectItemPopup = (index) => {
        dispatch(setSortBy(index))
        setVisiblePopup(false)
    }

    const itemsPopup = [
        {name: 'По популярности'}, 
        {name: 'По цене'}, 
        {name: 'По алфавиту'}
    ]

    const items=['Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    const activeLabel = itemsPopup[sortBy].name
    return (
        <div className={styles.container}>
            <div className={styles.categories}>
                <ul>

                    <li 
                        className={category === null ? styles.active : ''} 
                        onClick={() => dispatch(setCategory(null))}
                    >Все</li>
                    {items && items.map((name, index) => (
                        <li onClick={() => dispatch(setCategory(index))}
                            className={category === index ? styles.active : ''}
                            key={`${name}_${index}`}

                        >{name} </li>
                    ))}
                </ul>
            </div>
            
            <div
                ref={sortRef}
                className={styles.sort_button}>
                Сортировка по: <span  onClick={() => setVisiblePopup(!visiblePopup)}>{activeLabel}</span>
                {visiblePopup && (
                    <div className={styles.button_popup}>
                        <ul >
                        {itemsPopup && itemsPopup.map((obj, index) => (
                            <li 
                                className={CN(styles.liPopup, sortBy === index ? styles.activePopup : '')}
                                onClick={() => onSelectItemPopup(index)}
                                key={`${obj.name}_${index}`}
                            >{obj.name}
                            </li>
                        ))}   
                           
                        </ul>
                    </div>
                )
                }


            </div>


        </div>
    );
};

export default Navigation;