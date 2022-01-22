import React from "react";
import Spinner from "./Spinner";

export default {
  component: Spinner,
  title: "Loading",
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default_loading",
  title: "Loading...",
  backgroundColor: "white",
  //   borderColor: "gray",
  color: "black",
};

export const Inverse = Template.bind({});
Inverse.args = {
  state: "inverse-loading",
  title: "Loading...",
  backgroundColor: "black",
  //   borderColor: "white",
  color: "white",
};
