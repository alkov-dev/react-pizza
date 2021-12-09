export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
      type: 'SET_LOADED',
      payload: false,
    });

  };








