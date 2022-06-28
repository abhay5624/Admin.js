import image from "../Assets/myAvatar.jfif";
import shobhitImage from "../Assets/shobhit.jpg";
const init = {
  Company_name: "Books-n-Trade",
  pic: "https://lh3.googleusercontent.com/-rDCvRrvT0WNiepIu0KrbpZ4f2r_q_Zy0L-Yst5UOzxdgvn8G-7RaPr28KFIWi2sM5XR-u-nX4rpSMxhvTEpDHE=w16383",
  dis: "Rent Read Repeat",
  mission: "we want novels to be affordable and available to everyone",
  Overview: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non euismod felis. Integer eu dictum felis. Donec ultrices et turpis sed ornare. Donec quis ultricies tellus, vitae porttitor turpis. Cras vitae nisi dignissim, feugiat ipsum in, faucibus tellus. Quisque ut dui diam. Vestibulum purus orci, tristique a sem quis, fermentum dapibus lectus. Ut blandit hendrerit efficitur. Quisque ut ex leo. Duis blandit turpis tortor, ut feugiat purus rutrum eu. Suspendisse pulvinar lectus velit, quis blandit dui faucibus sed. Fusce fermentum lacinia diam, a luctus lacus vulputate in. Proin non varius dolor.",
    "Nulla facilisi. Nullam nec diam sit amet ligula lobortis dignissim at non nulla. Nam consectetur, orci in tincidunt ultrices, leo purus blandit mauris, ut laoreet leo enim eget lacus. Nullam interdum quis metus non vehicula. Integer dapibus porta sodales. Donec varius leo at elit lobortis molestie. Etiam consectetur augue ornare orci tincidunt pharetra. Sed vehicula, mi ut fringilla placerat, est quam ultricies est, quis vulputate orci dolor eget lacus. Vivamus at aliquam odio. Nullam elementum luctus ipsum. In sem massa, euismod nec lacus sed, pulvinar pharetra mauris.",
  ],
  Team: [
    {
      position: "Founder",
      name: "Shobhit Yadav",
      role: "CEO",
      Des: "The idea of Book & Rents was given by over founder Mr. Shobhit Yadav. He is a BCA student",
      img: shobhitImage,
    },
    {
      position: "Co-Founder",
      name: "Abhay Sharma",
      role: "Web Developer",
      Des: "The web of Books and sale have Been Developed by Mr. Abhay Sharmax. He is a BCA student",
      img: image,
    },
  ],
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
