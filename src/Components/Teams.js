import React from "react";
import { useSelector } from "react-redux";
const Teams = () => {
  const data = useSelector((state) => state.MyProfile);

  return (
    <div className="teams">
      <div className="flexbox" style={{ justifyContent: "space-between" }}>
        <h3>Teams</h3>
      </div>
      <div className="flexbox" style={{ justifyContent: "space-evenly" }}>
        {data.Team.map((member) => (
          <div className="member">
            <img src={member.img} alt="image" />
            <h4>{member.position}</h4>
            <p className="lowlight">{member.Des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
