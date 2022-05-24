import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { loginTypes } from "../types/loginTypes"


// ***********************Registro en Firebase ***************************/

export const registerAsync =(email, password, name) => {
    return(dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) =>{
            await updateProfile(auth.currentUser, {displayName: name})
            dispatch(registerSync(email, password, name))
            console.log("Usuario registrado")
        })
        .catch(error => {
            console.warn(error, 'Usuario no registrado')
        })
    }
}

export const registerSync =(email, pass, name)=>{
    return{
        type: loginTypes.register,
        payload: {
            email, pass, name
        }
    }
}



// ***********************Login Asincrónico Firebase***********************/

export const loginAsync = (email, password) => {
    return(dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(loginSync(user.email, user.password))
            console.log("Usuario logueado")
        })
        .catch(error=>{
            console.warn(error, 'usuario no logueado');
        })
    }
}

export const loginSync =(user, pass)=>{
    return{
            type: loginTypes.login,
            payload: { user, pass}
    }
}




export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user, 'Usuario autorizado')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}

//-------------------Logout --------- */
export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                console.log('Adios')
                dispatch(logout())

            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logout = () => {
    return {
        type: loginTypes.logout
    }
}