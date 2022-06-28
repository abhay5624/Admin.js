const border_color = [
  "rgba(0, 141, 230, 1)",
  "rgb(152, 57, 207)",
  "rgb(126, 226, 126)",
  "#ec68ba",
];
const background_color = [
  "rgba(0, 141, 230, 0.75)",
  "rgba(152, 57, 207,0.75)",
  "rgba(126, 226, 126,0.75)",
  "rgba(236,104,186,0.75)",
];
const init = {
  labels: ["Home Page", "About Page", "Blog Page", "Books Pag"],
  datasets: [
    {
      label: "Visit",
      data: [500, 1200, 400, 300],
      backgroundColor: background_color,
      borderColor: border_color,
      borderWidth: 2,
      fill: true,
    },
  ],
};

const DonutChartData = (state = init, action) => {
  switch (action.type) {
    case "UBDATE_CHART":
      return action.payload;
    default:
      return state;
  }
};
export default DonutChartData;
