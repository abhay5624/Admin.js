import image from "../Assets/myAvatar.jfif";
const init = {
  name: "Abhay",
  pic: image,
  dis: "I am a Web Developer",
};
const Profile = (state = init, action) => {
  switch (action.type) {
    case "Edit_Profile":
      return action.payload;
    default:
      return state;
  }
};
export default Profile;
