import { collection, getDoc, getDocs } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"
import { firebaseTypes } from "../types/firebaseTypes"




export const readRecipeAsync = () => {
    return async (dispatch) => {
        const collectionRead = await getDocs(collection(DB, "recipe"))
        console.log(collectionRead);
        const recipe = []
        collectionRead.forEach(doc => {
            recipe.push({
                ...doc.data()
            })
        })
        dispatch(readRecipeSync(recipe))
    }
}

export const readRecipeSync = (recipe) => {
    return {
        type: firebaseTypes.read,
        payload: recipe
    }
}