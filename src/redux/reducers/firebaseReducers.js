import { firebaseTypes } from "../types/firebaseTypes"

const initialState = {
    recipe: [],
    price: []
}

export const firebaseReducers = (state = initialState, action) => {
    switch (action.type) {
        case firebaseTypes.read:
            return {
                recipe: [...action.payload]
            }
        case firebaseTypes.price:
            return {
                ...state,
                price:  [...action.payload ]
            }
            default:
                return state
        }
    }
    