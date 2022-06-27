import { combineReducers } from "redux";
import NavLinkReducer from "./NavLinkReducer";
import Profile from "./ProfileReducer";
const rootReducer = combineReducers({
  NavLink: NavLinkReducer,
  MyProfile: Profile,
});
export default rootReducer;
