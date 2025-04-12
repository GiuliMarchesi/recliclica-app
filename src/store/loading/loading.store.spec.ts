import { createAction } from "@ngrx/store";
import { show, hide } from "./loading.actions";
import { loadingReducer } from "./loading.reducers";
import { LoadingState } from "./LoadingState";

//describimos las pruebas de carga de la Store y ahora crearemos una primera prueba que simplemente
//falla para la acción de show
// describe('Loading store', () => {
//     it('show', () => {
        //empiezo esperando que falso sea igual a verdadero para hacer que falle la prueba
//         expect(false).toBeTruthy();
//     });
// });


//ahora la prueba tiene que verificar com si cuando llamo al reductor de carga con un estado inicial
// y la acción de show, entonces el nuevo estado tiene la propiedad "show" de nuestro estado 
//de carga igual a verdadero
describe('Loading store', () => {
    it('show', () => {
        //creo una constante nuevo estado que recibirá la respuesta de lo que nuestro
        // reducutor de carga devolverá. Este reductor de carga recibe el estado inicial y la accion
        //que se ejecutará, asi que creamos una constante que recibirá el estado inicial del tipo
        //LoadingState que será igual a un objeto que tenga la propiedad show igual a false
        const initialState: LoadingState = {show: false};
        const newState = loadingReducer(initialState, show());

        //ahora lo que esperamos es que el nuevo estado tenga la propiedad show = true
        //esto va a fallar porque aún no estoy haciendo nada dentro del reductor
        expect(newState).toEqual({show: true});
    });

    it('hide', () => {
        //hago a la inversa de lo que hice antes, si el estado inicial es true
        //cuando llamo a la acción de hide, lo oculto
        const initialState: LoadingState = {show: true};
        const newState = loadingReducer(initialState, hide());
        //ahora espero que el nuevo estado tenga la propiedad show = false
        expect(newState).toEqual({show: false});
    });

    it('should keep state if action is unknown', () => {

        const initialState: LoadingState = {show: true};
        const action = createAction('UNKNOWN');
        const newState = loadingReducer(initialState, action());
        
        expect(newState).toEqual({show: true});
    });
}
);
