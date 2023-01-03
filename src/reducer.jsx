export const initialState = {
    basket: [],
    user: null, 
};

//the redudcer is listener. it will take insital state and take action
const reducer = (state, action) => {
    // console.log(action); reducer is listening when the item is click to add 
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state, 
                basket: [...state.basket, action.item ],
            };

        case 'EMPTY_BASKET':
            return { 
                ...state, basket: [],
            }; //when the payment succeful empty the basket/total is zero

            case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                );

            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1)
            }else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not basket!`
                );
            }

            return {
                ...state,
                basket: newBasket,
            };
            case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

            default:
                return state;
    }
}

export default reducer;

//inistial state created with empty basket and imported to index.js