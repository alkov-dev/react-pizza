const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0   )


 const cart = (state = initialState, action) => {

    if (action.type === 'PLUS_CART_ITEM') {

        const newItems1 = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0],
        ]
        let count = state.items[action.payload].items.length 
        let cost1pizza = state.items[action.payload].totalPrice / count
        // console.log('count', cost1pizza, ' ', state.items[action.payload].totalPrice)
        // const currentTotalCount = newItems1[action.payload].items.length
        // console.log(currentTotalPrice, currentTotalCount)
        return {
            ...state,
            items: {
                ...state.items,
                [action.payload]: {
                    items: newItems1,
                    totalPrice: getTotalPrice(newItems1)
                }
            },
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + cost1pizza,
        }
    }


    if (action.type === 'MINUS_CART_ITEM') {
        let count = state.items[action.payload].items.length 
        let cost1pizza = state.items[action.payload].totalPrice / count


        const oldItems = state.items[action.payload].items
        const newItems =  oldItems.length > 1 
        ? oldItems.slice(1)
        : oldItems
       
        return {
            ...state,
            items: {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            },
            totalCount: count > 1 ? state.totalCount - 1 : state.totalCount,
            totalPrice: count > 1 ? state.totalPrice - cost1pizza : state.totalPrice,
        }
    }
    

    if (action.type === 'REMOVE_1PIZZA') {


        const newItems = {
            ...state.items,
           }

        const currentTotalPrice = newItems[action.payload].totalPrice
        const currentTotalCount = newItems[action.payload].items.length
        console.log('---',  currentTotalCount)
        delete newItems[action.payload]

        return{
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
         }



    }

    if (action.type === 'ADD_PIZZA_CART') {
        const currenPizzaItems = !state.items[action.payload.id] 
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload]

        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currenPizzaItems,
                totalPrice: getTotalPrice(currenPizzaItems)
            }
        }

        const items = Object.values(newItems).map(obj => obj.items)
        const allPizzas = [].concat.apply([], items)
        const totalPrice = getTotalPrice(allPizzas)

        return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length, 
            totalPrice: totalPrice
        }
    }
    else if (action.type ==='CLEAR_CART'){
        return {
            totalCount: 0,
            totalPrice: 0,
            items: {}}
    }
    return state
}



export default cart