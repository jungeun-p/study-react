import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
// 호출시 id는 1씩 더해진다.
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const toggle = (id) => ({ type: TOGGLE, id });
export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => ({ type: REMOVE, id });
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: "",
  todos: [
    { id: 1, text: "redux basic", done: true },
    { id: 2, text: "react with redux", done: false },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      //({ ...state, input }),
      produce((state, draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      // ({
      //   ...state,
      //   todos: state.todos.concat(todo),
      // }),
      produce((state, draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      // ({
      //   ...state,
      //   todos: state.todos.map((todo) =>
      //     todo.id === id ? { ...todo, done: !todo.done } : todo
      //   ),
      // }),
      produce((state, draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      // ({
      //   ...state,
      //   todos: state.todos.filter((todo) => todo.id !== id),
      // }),
      produce((state, draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
