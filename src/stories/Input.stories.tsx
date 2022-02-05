import React from "react";
import { Meta, Story } from '@storybook/react';

import { InputProps } from "../components/Input/interface";

import Input from '../components/Input';

import { FaRegUser } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    icon: { control: { disable: true } },
    iconPosition: { control: { disable: true } },
  }
}

export default meta;

const Template: Story<any> = (args: InputProps) => <Input {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const InputWithIcon = Template.bind({});

Small.args = {
  size: 'small',
  title: 'Small size',
  onChange: () => {}
};


Medium.args = {
  size: 'medium',
  title: 'Medium size',
  onChange: () => {}
};

Large.args = {
  size: 'large',
  title: 'Large size',
  onChange: () => {}
};

InputWithIcon.args = {
  size: 'small',
  title: 'Input with Icon Left',
  icon: <FaRegUser />,
  iconPosition: "left",
  onChange: () => {}
};

InputWithIcon.storyName = "Input with Icon Left"
