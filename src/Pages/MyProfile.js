import React from "react";
import { useSelector } from "react-redux";
import Overview from "../Components/Overview";
import Mission from "../Components/Mission";
const MyProfile = () => {
  const data = useSelector((state) => state.MyProfile);
  return (
    <div className="Company">
      <div className="Profileheader flexbox">
        <div className="flexbox">
          <img src={data.pic} alt="" />
          <div>
            <h2 className="companyname">{data.Company_name}</h2>
            <p>{data.dis}</p>
          </div>
        </div>
        <div>
          <p className="linksheader">
            Anime.js/ <span>Profile</span>{" "}
          </p>
        </div>
      </div>
      <Overview />
      <Mission />
    </div>
  );
};

export default MyProfile;
