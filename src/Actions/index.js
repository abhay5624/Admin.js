export const NavLinkAction = (payload) => {
  return {
    type: "LinkChanges",
    payload: payload,
  };
};
export const ProfileActtion = (payload) => {
  return {
    type: "Edit_Profile",
    payload: payload,
  };
};
export const TodoUbdate = (payload) => {
  return {
    type: "UBDATE_DATA",
    payload: payload,
  };
};
