const init = {
  labels: ["0", "1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Visit",
      data: [5, 12, 4, 3, 12, 11, 14],
      backgroundColor: "rgba(122, 210, 248, 0.75)",
      borderColor: "rgba(0, 141, 230, 1)",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "rgba(0, 148, 206, 1)",
      pointRadius: 3,
      borderWidth: 2,
      fill: true,
    },
    {
      label: "Pages/Visits",
      data: [9, 8, 5, 8, 5, 14, 10],
      backgroundColor: "rgba(144, 122, 248, 0.75)",
      borderColor: "rgb(144, 122, 248)",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "rgba(97, 0, 182, 1)",
      pointRadius: 3,
      borderWidth: 2,
      fill: true,
    },
  ],
};
const lineChartData = (state = init, action) => {
  switch (action.type) {
    case "UBDATE_STATE":
      return action.payload;
    default:
      return state;
  }
};
export default lineChartData;
