import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const Frontend = () => {
  const data = {
    labels: ["React.js","JavaScript", "Tailwind CSS", "MUI", "CSS3","HTML5"],
    datasets: [
      {
        label: "Percentage %",
        data: [16, 16, 18,16, 16, 18],
        backgroundColor: [
            "#3C5037",
            "#A5236E",
            "#419BD2",
            "#782D2D",
          "#1E4B55",
          "#289B91",
        ],
        borderColor: [
            "#3C5037",
            "#A5236E",
            "#419BD2",
            "#782D2D",
          "#1E4B55",
          "#289B91",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data}></Doughnut>;
    </div>
  );
};



export default Frontend;