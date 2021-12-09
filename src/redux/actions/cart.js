export const setAddCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_1PIZZA',
    payload: id
})
export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
})
export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})



export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
      type: 'SET_LOADED',
      payload: false,
    });

  };








