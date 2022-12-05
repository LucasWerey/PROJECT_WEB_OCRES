import PieChart from "../components/widgets/pieChart";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default {
  title: "PieChart",
  component: PieChart,
};

export const Default = () => <PieChart />;
