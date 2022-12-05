import BarChart from "../components/widgets/barChart";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default {
  title: "barChart",
  component: BarChart,
};

export const Default = () => <BarChart />;
