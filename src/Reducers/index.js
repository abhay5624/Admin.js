import { combineReducers } from "redux";
import NavLinkReducer from "./NavLinkReducer";
import Profile from "./ProfileReducer";
import lineChartData from "./LineChartReducer";
import DonutChartData from "./DonutChartReducet";
import FormReducer from "./FormReceiveReducer";
const rootReducer = combineReducers({
  NavLink: NavLinkReducer,
  MyProfile: Profile,
  LineChart: lineChartData,
  DonnutChart: DonutChartData,
  FormData: FormReducer,
});
export default rootReducer;
