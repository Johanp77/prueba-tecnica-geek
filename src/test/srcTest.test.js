import '@testing-library/jest-dom';
import { logout } from "../redux/actions/loginActions";
import { loginReducers } from "../redux/reducers/loginReducers";
import { loginTypes } from "../redux/types/loginTypes";


describe ('Ejecutando pruebas a el contenido de la carpeta src', () => {

    test('Inicio de sesión', () => {

        const initialState = {};
        const action = {
            type: loginTypes.login,
            payload: {
                user: 'martha',
                pass: 'marthaesgenial'
            }
        }
        const state = loginReducers(initialState, action);
        expect(state).toEqual({
            user: 'martha',
            pass: 'marthaesgenial'
        })
    });

    test('Cierre de sesión sincrónico', () => {

        const initialState = {
            user: 'martha',
            pass: 'marthaesgenial'
        };
        const action = {
            type: loginTypes.logout
        };

        const state = loginReducers(initialState, action);
        expect(state).toEqual([])
    })

    test('Cerrar sesion', () => {

        const logoutAction = logout();

        expect(logoutAction).toEqual({
            type: loginTypes.logout
        })
    })
    
    test('verificar types, comparar objetos', () => {
        expect(loginTypes).toEqual({
            login: 'Login',
            logout: 'logout',
            register: 'register'
        })
    })

    test('datos traidos desde firestore', () => {
        const initialState = {
            recipe: []
        };
        const action = {
            type: loginTypes.read,
            payload: [
                {
                    id: '1',
                    name: 'Pizza',
                    price: '$5'
                },
                {
                    id: '2',
                    name: 'Hamburguesa',
                    price: '$10'
                }
            ]
        };
        const state = loginReducers(initialState, action);
        expect(state).toEqual({
            recipe: [
                {
                    id: '1',
                    name: 'Pizza',
                    price: '$5'
                },
                {
                    id: '2',
                    name: 'Hamburguesa',
                    price: '$10'
                }
            ],
        })
    })

})