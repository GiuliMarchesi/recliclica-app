import { createReducer, on } from "@ngrx/store";
import { show, hide } from "./loading.actions"; // Adjust the path as needed
import { LoadingState } from "./LoadingState";

//creamos una nueva constante llamada initialState que sera del tipo LoadingState
//y tiene la propiedad show con valor false y ahora podemos usar esto como valor inicial
//para que sea mas facil para nosotros saber el estado inicial del reducer
const initialState: LoadingState = {
    show: false
};

//nuestra constante recibirá la creación del reductor, para eso usamos la funcion
// createReducer de la biblioteca de ngrx, este se crea con los valores iniciales de nuestro estado
// y también un alista de acciones con las que trabajará
// por ahora lo creamos vacio y creamos una lista de acciones
const reducer = createReducer(
    initialState,
    //el reductor hace cosas en funcion de la acción que recibe, entonces puedo hacer que en la accion de 
    // mostrar(show), el reductor ejecutará una funcion, esta funcion devuelve el nuevo estado, por ahora 
    //devuelve un objeto vacio
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return {show: false};
    })
);

//ahora exporto una funcion que recibe el estado y la accion que colocamos sobre ese estado 
// esta funcion devolverá el reductor que avabamos de crear
export function loadingReducer(state: LoadingState, action: any) {
    return reducer(state, action);
}