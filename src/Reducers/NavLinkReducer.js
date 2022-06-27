const init = { ActiveLink: "Dashboard", UbActiveLink: "All" };
const NavLinkReducer = (state = init, action) => {
  switch (action.type) {
    case "LinkChanges":
      return action.payload;
    default:
      return state;
  }
};
export default NavLinkReducer;
