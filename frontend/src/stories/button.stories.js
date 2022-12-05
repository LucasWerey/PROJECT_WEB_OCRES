import Btn from "../controleurs/aide/button";

export default {
  title: "Button",
  component: Btn,

  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export const Default = ({colors}) => <Btn backgroundColor={colors}/>;

Default.args =  {
  color: "#516dd0",
};