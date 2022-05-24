import { loginTypes } from "../types/loginTypes";


export const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case loginTypes.login:
            return {
                user: action.payload.user,
                pass: action.payload.pass
            }
        case loginTypes.register:
            return {
                email: action.payload.email,
                name: action.payload.name,
                pass: action.payload.pass
            }
        case loginTypes.logout:
            return []
        default:
            return state;
    }
}