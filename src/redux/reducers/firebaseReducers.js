import { firebaseTypes } from "../types/firebaseTypes"

const initialState = {
    recipe: []
}

export const firebaseReducers = (state = initialState, action) => {
    switch (action.type) {
        case firebaseTypes.read:
            return {
                recipe: [...action.payload]
            }
            default:
                return state
        }
    }
    