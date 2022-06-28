import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProfileActtion } from "../Actions";
const Mission = () => {
  const data = useSelector((state) => state.MyProfile);
  const Dispatch = useDispatch();
  const [PopUp, setPopUp] = useState(false);
  const PopupHandler = (e) => {
    setPopUp(!PopUp);
  };
  const EditMissionHandler = (e) => {
    e.preventDefault();
    const children = e.target.parentElement;

    const Paragraph1 = children.childNodes[0].value;
    console.log(Paragraph1);
    let profileData = data;
    profileData.mission = Paragraph1;
    Dispatch(ProfileActtion(profileData));
    setPopUp(!PopUp);
  };
  return (
    <div className="mission">
      <div className="flexbox" style={{ justifyContent: "space-between" }}>
        <h3>Mission</h3>
        <button
          onClick={(e) => {
            PopupHandler(e);
          }}
        >
          Edit
        </button>
      </div>
      <p>{data.mission}</p>
      {PopUp && (
        <>
          <div className="PopUp">
            <h3>Edit Mission</h3>
            <form>
              <textarea
                name="paragraph1"
                id=""
                defaultValue={data.mission}
              ></textarea>
              <br />

              <input
                type="submit"
                value="Done"
                onClick={(e) => {
                  EditMissionHandler(e);
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

export default Mission;
