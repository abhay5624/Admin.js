import React, { useState, useEffect } from "react";
import { ProfileActtion } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
const Overview = (overview) => {
  const data = useSelector((state) => state.MyProfile);
  const Dispatch = useDispatch();
  const [Pop, setPop] = useState(false);

  const PopupHandler = () => {
    setPop(!Pop);
  };
  const EditOverviewHandler = (e) => {
    e.preventDefault();
    const children = e.target.parentElement;
    const Paragraph1 = children.childNodes[0].value;
    const Paragraph2 = children.childNodes[1].value;
    const total = [Paragraph1, Paragraph2];
    let profileData = data;
    profileData.Overview = total;
    Dispatch(ProfileActtion(profileData));
    setPop(!Pop);
  };
  return (
    <div className="Overview">
      <div className="flexbox" style={{ justifyContent: "space-between" }}>
        <h3>Overview</h3>
        <button
          onClick={() => {
            PopupHandler();
          }}
        >
          Edit
        </button>
      </div>

      <p>{data.Overview[0]}</p>
      <p>{data.Overview[1]}</p>
      {Pop && (
        <>
          <div className="PopUp">
            <h3>Edit Overview</h3>
            <form>
              <textarea
                name="paragraph1"
                id=""
                defaultValue={data.Overview[0]}
              ></textarea>
              <br />
              <textarea
                name="paragraph2"
                id=""
                defaultValue={data.Overview[1]}
              ></textarea>
              <br />
              <input
                type="submit"
                value="Done"
                onClick={(e) => {
                  EditOverviewHandler(e);
                }}
              />
            </form>
          </div>
          <div className="coverup"></div>
        </>
      )}
    </div>
  );
};

export default Overview;
