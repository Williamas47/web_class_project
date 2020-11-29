import { createStore } from "redux";

const INITIAL_STATE = {
  activeLesson: "",
  activeModule: "",
  modules: {
    web_design: [
      {
        id: 1,
        tittle: "Introduction",
        lessons: [
          { id: 1, tittle: "guerrilla" },
          { id: 2, tittle: "college" },
        ],
      },
      {
        id: 2,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "beam" },
          { id: 2, tittle: "perfume" },
          { id: 3, tittle: "trunk" },
          { id: 4, tittle: "keep" },
        ],
      },
      {
        id: 3,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "bus" },
          { id: 2, tittle: "wolf" },
          { id: 3, tittle: "up" },
          { id: 4, tittle: "widen" },
        ],
      },
      {
        id: 4,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "touch" },
          { id: 2, tittle: "test" },
          { id: 3, tittle: "headquarters" },
          { id: 4, tittle: "microphone" },
        ],
      },
      {
        id: 5,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "mud" },
          { id: 2, tittle: "clerk" },
          { id: 3, tittle: "education" },
        ],
      },
    ],
    sass: [
      {
        id: 1,
        tittle: "Introduction",
        lessons: [
          { id: 1, tittle: "guerrilla" },
          { id: 2, tittle: "college" },
        ],
      },
      {
        id: 2,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "beam" },
          { id: 2, tittle: "perfume" },
          { id: 3, tittle: "trunk" },
          { id: 4, tittle: "keep" },
        ],
      },
      {
        id: 3,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "bus" },
          { id: 2, tittle: "wolf" },
          { id: 3, tittle: "up" },
          { id: 4, tittle: "widen" },
        ],
      },
      {
        id: 4,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "touch" },
          { id: 2, tittle: "test" },
          { id: 3, tittle: "headquarters" },
          { id: 4, tittle: "microphone" },
        ],
      },
      {
        id: 5,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "mud" },
          { id: 2, tittle: "clerk" },
          { id: 3, tittle: "education" },
        ],
      },
    ],
    javascript: [
      {
        id: 1,
        tittle: "Tipo de Dados",
        lessons: [
          { id: 1, tittle: "Variáveis" },
          { id: 2, tittle: "String" },
          { id: 3, tittle: "Array" },
          { id: 4, tittle: "Objeto" },
        ],
      },
      {
        id: 2,
        tittle: "Funções",
        lessons: [
          { id: 1, tittle: "Declaração de Funções" },
          { id: 2, tittle: "Argumentos" },
          { id: 3, tittle: "Retorno" },
          { id: 4, tittle: "Arrow Functions" },
        ],
      },
      {
        id: 3,
        tittle: "Array",
        lessons: [
          { id: 1, tittle: "Declaração de Arrays" },
          { id: 2, tittle: "Index" },
          { id: 3, tittle: "Métodos de Arrays" },
        ],
      },
      {
        id: 4,
        tittle: "Objetos",
        lessons: [
          { id: 1, tittle: "Declaração de Objetos" },
          { id: 2, tittle: "Propiedades" },
          { id: 3, tittle: "Métodos de Objetos" },
          { id: 4, tittle: "Utilização" },
        ],
      },
    ],
    react: [
      {
        id: 1,
        tittle: "Introduction",
        lessons: [
          { id: 1, tittle: "Installando o React com NPM" },
          { id: 2, tittle: "Conhecendo JSX" },
        ],
      },
      {
        id: 2,
        tittle: "Componentes",
        lessons: [
          { id: 1, tittle: "Class Components" },
          { id: 2, tittle: "Props" },
          { id: 3, tittle: "State e Clico de Vida" },
          { id: 4, tittle: "Children" },
        ],
      },
      {
        id: 3,
        tittle: "Formulários",
        lessons: [
          { id: 1, tittle: "Input" },
          { id: 2, tittle: "TextArea" },
          { id: 3, tittle: "Select" },
          { id: 4, tittle: "Radio" },
        ],
      },
      {
        id: 4,
        tittle: "ReactRouter",
        lessons: [
          { id: 1, tittle: "Router" },
          { id: 2, tittle: "Link" },
          { id: 3, tittle: "NavLink" },
          { id: 4, tittle: "Nested Routes" },
        ],
      },
      {
        id: 5,
        tittle: "Redux",
        lessons: [
          { id: 1, tittle: "CreateStore" },
          { id: 2, tittle: "Store" },
          { id: 3, tittle: "CombineReducers" },
        ],
      },
    ],
    amb_dev: [
      {
        id: 1,
        tittle: "Introduction",
        lessons: [
          { id: 1, tittle: "guerrilla" },
          { id: 2, tittle: "college" },
        ],
      },
      {
        id: 2,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "beam" },
          { id: 2, tittle: "perfume" },
          { id: 3, tittle: "trunk" },
          { id: 4, tittle: "keep" },
        ],
      },
      {
        id: 3,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "bus" },
          { id: 2, tittle: "wolf" },
          { id: 3, tittle: "up" },
          { id: 4, tittle: "widen" },
        ],
      },
      {
        id: 4,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "touch" },
          { id: 2, tittle: "test" },
          { id: 3, tittle: "headquarters" },
          { id: 4, tittle: "microphone" },
        ],
      },
      {
        id: 5,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "mud" },
          { id: 2, tittle: "clerk" },
          { id: 3, tittle: "education" },
        ],
      },
    ],
    vers_modbundl: [
      {
        id: 1,
        tittle: "Introduction",
        lessons: [
          { id: 1, tittle: "guerrilla" },
          { id: 2, tittle: "college" },
        ],
      },
      {
        id: 2,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "beam" },
          { id: 2, tittle: "perfume" },
          { id: 3, tittle: "trunk" },
          { id: 4, tittle: "keep" },
        ],
      },
      {
        id: 3,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "bus" },
          { id: 2, tittle: "wolf" },
          { id: 3, tittle: "up" },
          { id: 4, tittle: "widen" },
        ],
      },
      {
        id: 4,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "touch" },
          { id: 2, tittle: "test" },
          { id: 3, tittle: "headquarters" },
          { id: 4, tittle: "microphone" },
        ],
      },
      {
        id: 5,
        tittle: "Example Module",
        lessons: [
          { id: 1, tittle: "mud" },
          { id: 2, tittle: "clerk" },
          { id: 3, tittle: "education" },
        ],
      },
    ],
  },
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_ACTIVE_LESSON":
      // console.log("x");
      return {
        ...state,
        activeLesson: action.lesson.tittle,
        activeModule: action.module.tittle,
      };
    case "RESET_STATUS":
      // console.log("resetou!");
      return {
        ...state,
        activeLesson: "",
        activeModule: "",
      };
    default:
      // console.log("Nada aqui por enquanto");
  }
  // console.log(action);
  return state;
}

const store = createStore(reducer);
export default store;
