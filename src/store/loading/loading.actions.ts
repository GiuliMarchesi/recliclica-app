import { createAction } from "@ngrx/store";
//exporto la constante que recibirá la funcion de creación de acciones de la biblioteca de ngrx
//Esta funcion se identificará como "[Loading] Show"
export const show = createAction("[Loading] Show");
//Esta funcion se identificará como "[Loading] Hide"
export const hide = createAction("[Loading] Hide");