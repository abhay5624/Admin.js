const date = new Date();
const init = [
  {
    name: "Add a Todo list",
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  },
];
const TodoReducer = (state = init, action) => {
  switch (action.type) {
    case "UBDATE_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default TodoReducer;
