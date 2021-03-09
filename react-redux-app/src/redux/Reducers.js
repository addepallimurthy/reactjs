const initalState = {
    cake: { noOfCakes: 10, cakePrice: 10, cakes: 0 },
    icecream: { noOfIceCreams: 10, iceCreamPrice: 30, icecreams: 0 },
    purchasedItems: 0,
    totalPrice: 0
}

export const cakeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                cake:{...state.cake,noOfCakes: state.cake.noOfCakes - 1,
                cakes: state.cake.cakes + 1,
                },
                purchasedItems: state.purchasedItems + 1,
                totalPrice: state.totalPrice + state.cakePrice
            }
        default:
            return state;
    }
}
export const iceCreamReducer = (state = initalState, action) => {
    switch (action.type) {
        case "BUY_ICECREAM":
            return {
                ...state,
                icecream:{...state.icecreams,noOfIceCreams: state.icecream.noOfIceCreams - 1,
                icecreams: state.icecream.icecreams + 1,
                },
                purchasedItems: state.purchasedItems + 1,
                totalPrice: state.totalPrice + state.iceCreamPrice
            }
        default:
            return state;
    }
}