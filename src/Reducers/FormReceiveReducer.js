const init = [
  {
    name: "Aakash",
    email: "aakashsharma@gmail.com",
    msg: "Hey, Is there any new book for me ? (0-0)",
  },
  {
    name: "Shobhit",
    email: "shobhityadav@gmail.com",
    msg: "Hey, Nice website you have there (0-0)",
  },
  {
    name: "Vansh",
    email: "Vanshtalvar@gmail.com",
    msg: "Hey, Anything that i can eat ?(0-0)?",
  },
  {
    name: "Hari om",
    email: "Ritik@gmail.com",
    msg: "Hey,This site need a cyber expert (0-0)",
  },
  {
    name: "Rahul",
    email: "Rahulyadav@gmail.com",
    msg: "Hey, How the chart work bro (0-0)",
  },
];
const FormReducer = (state = init, action) => {
  switch (action.type) {
    case "UBDATE-STATE":
      return action.payload;
    default:
      return state;
  }
};
export default FormReducer;
