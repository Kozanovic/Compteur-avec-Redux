import { createStore } from "redux";

const initialisation = {
  compteur: 0,
};
const reducer = (state = initialisation, action) => {
  switch (action.type) {
    case "incrementer":
      return { compteur: state.compteur + 1 };
    case "decrementer":
      return { compteur: state.compteur - 1 };
    case "reset":
      return { compteur: 0 };
    default : 
    return state;
  }
};
const store = createStore(reducer);
export default store;
