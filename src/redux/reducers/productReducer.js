import { ActionTypes } from "../constants/actionType";
const initialState = {
    products : []
}

export const productReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCT:
        return {...state, products : payload};
        default:
        return state;
    }
}

export const selectedproductReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
        return {...state, product : payload};
        case ActionTypes.REMOVE_PRODUCT:
            return {};
        default:
        return state;
    }   
}