import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faDollarSign,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import UserChart from "../Components/UserChart";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h3>Welcome !</h3>
      <div className="flexbox">
        <div className="box1">
          <div className="flexbox boxicon">
            <div className="dollersign">
              <FontAwesomeIcon icon={faDollarSign} />
            </div>

            <div>
              <h3>15879</h3>
              <h4 className="lowlight">Total Sales</h4>
            </div>
          </div>

          <div className="detail">
            <h4>Target</h4>
            <div className="lineholder">
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="flexbox boxicon">
            <div className="CartSign">
              <FontAwesomeIcon icon={faCartPlus} />
            </div>

            <div>
              <h3>879</h3>
              <h4 className="lowlight">New Orders</h4>
            </div>
          </div>

          <div className="detail">
            <h4>Target</h4>
            <div className="lineholder">
              <div className="line2"></div>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="flexbox boxicon">
            <div className="Userplus">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>

            <div>
              <h3>79</h3>
              <h4 className="lowlight">New Users</h4>
            </div>
          </div>

          <div className="detail">
            <h4>Target</h4>
            <div className="lineholder">
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flexbox">
        <UserChart />
      </div>
    </div>
  );
};

export default Dashboard;
