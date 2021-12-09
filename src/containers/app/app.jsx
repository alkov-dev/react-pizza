import React from 'react';
import styles from './app.module.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import HomePage from '../../components/HomePage/HomePage';
import Cart from '../../components/Cart';

const App = () => {
    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/cart" exact element={<Cart/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

