import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const Backend = () => {
  const data = {
    labels: [ "Node.js", "Express", "MongoDB","Dotenv"],
    datasets: [
      {
        label: "Percentage %",
        data: [12, 12, 5, 6],
        backgroundColor: [
            "#3C5037",
            "#A5236E",
            "#419BD2",
            "#782D2D",
          
        ],
        borderColor: [
            "#3C5037",
            "#A5236E",
            "#419BD2",
            "#782D2D",
          
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

export default Backend;
