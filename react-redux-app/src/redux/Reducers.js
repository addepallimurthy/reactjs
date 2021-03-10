const initalState = {
    cake: { noOfCakes: 10, cakePrice: 10, cakes: 0 },
    icecream: { noOfIceCreams: 10, iceCreamPrice: 30, icecreams: 0 },
    purchasedItems: 0,
    totalPrice: 0
}

export const cakeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return state.cake.noOfCakes >0 ?{
                ...state,
                cake:{...state.cake,noOfCakes: state.cake.noOfCakes - 1,
                cakes: state.cake.cakes + 1,
                },
                purchasedItems: state.purchasedItems + 1,
                totalPrice: state.totalPrice + state.cake.cakePrice
            }:state
            case "BUY_ICECREAM":
                return state.icecream.noOfIceCreams>0? {
                    ...state,
                    icecream:{...state.icecream,noOfIceCreams: state.icecream.noOfIceCreams - 1,
                    icecreams: state.icecream.icecreams + 1,
                    },
                    purchasedItems: state.purchasedItems + 1,
                    totalPrice: state.totalPrice + state.icecream.iceCreamPrice
                }:state
        default:
            return state;
    }
}