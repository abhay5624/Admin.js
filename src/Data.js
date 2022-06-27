export let chart = {
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
export let Dochart = {
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
