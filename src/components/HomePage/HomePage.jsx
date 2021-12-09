// OneDark
import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';
import PizzaList from '../PizzaList/PizzaList';


const HomePage = () => {

    return (
        <div>
            <Header/>
            <Navigation/> 
            <PizzaList/>
        </div>
    );
};

export default HomePage;