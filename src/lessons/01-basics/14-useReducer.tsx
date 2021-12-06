/*
 * 14-useReducer
 *
 * useReducer permet de gérer un état complexe qui aurait nécessité plusieurs `useState`.
 */

// Exemple

import { useReducer } from "react";

// Un simple DTO
interface Todo {
  id: number;
  title: string;
}

// Défini a quoi ressemble l'état de mon composant
interface TodoListState {
  isLoading: boolean;
  errorMessage: string;
  todos: Todo[];
}

/*
 * Défini quel "action" peux arrivé dans mon composant
 *
 * On utilise le `Discriminated Union` de TypeScript sur le type d'action pour avoir le bon type : see (https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions)
 * Pour le format on utilise la convention `flux standard action` : see (https://github.com/redux-utilities/flux-standard-action)
 */
type TodoListActions =
  | { type: "START_FETCH_TODOS" }
  | { type: "FETCH_TODOS_SUCCESS"; payload: Todo[] }
  | { type: "FETCH_TODOS_FAILURE"; payload: Error };

/*
 * Un reducer prend en paramètres :
 * - l'état courant
 * - une action
 *
 * Il retourne un nouvel état en fonction de l'action.
 * Un reducer est une fonction `pure` et synchrone, sans effet de bord (pas d'appel réseau, etc...).
 */
const todoListReducer = (
  state: TodoListState,
  action: TodoListActions
): TodoListState => {
  if (action.type === "START_FETCH_TODOS") {
    return {
      ...state,
      isLoading: true,
      errorMessage: "",
    };
  }

  if (action.type === "FETCH_TODOS_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      errorMessage: "",
      todos: action.payload, // Le type est reconnu par TypeScript grâce au `type guard` & `Discriminated Union`
    };
  }

  if (action.type === "FETCH_TODOS_FAILURE") {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload.message, // Le type est reconnu par TypeScript grâce au `type guard` & `Discriminated Union`
    };
  }

  return state;
};

// Défini l'état initial de mon composant
const initialState: TodoListState = {
  isLoading: false,
  errorMessage: "",
  todos: [],
};

export function TodoList() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const fetchTodos = async () => {
    // 1. on propage l'action "je vais récuperer des todos", le reducer change l'état en conséquence
    dispatch({ type: "START_FETCH_TODOS" });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const todos: Todo[] = await response.json();

      /*
       * 2a. on propage l'action "j'ai réussi a récuperer des todos" avec les todos en payload
       * le reducer change l'état en conséquence
       */
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: todos });
    } catch (error) {
      /*
       * 2b. on propage l'action "j'ai échoué dans ma récupération de todos", avec l'erreur en payload
       * le reducer change l'état en conséquence
       */
      dispatch({ type: "FETCH_TODOS_FAILURE", payload: error as Error });
    }
  };

  if (state.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={fetchTodos}>Fetch todos</button>
      {state.errorMessage && <p>Error: {state.errorMessage}</p>}
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
