import { combineReducers } from "redux";
import NavLinkReducer from "./NavLinkReducer";
import Profile from "./ProfileReducer";
import lineChartData from "./LineChartReducer";
import DonutChartData from "./DonutChartReducet";
import FormReducer from "./FormReceiveReducer";
import TodoReducer from "./TodoReducer";
const rootReducer = combineReducers({
  NavLink: NavLinkReducer,
  MyProfile: Profile,
  LineChart: lineChartData,
  DonnutChart: DonutChartData,
  FormData: FormReducer,
  TodoData: TodoReducer,
});
export default rootReducer;
