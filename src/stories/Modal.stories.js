import React from "react";
import { Modal } from "@shanbay/xbay-react-components";

console.log(Modal);
// import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "xbay/Modal",
  component: Modal,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Modal {...args} />;

export const A = Template.bind({});

A.args = {
  isShowing: true,
  title: "添加书本",
  children: <p>111</p>,
};
// Primary.args = {
//   primary: true,
//   label: "Button",
//   backgroundColor: "red",
// };
