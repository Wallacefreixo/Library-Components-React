import React from "react";
import { Meta, Story } from '@storybook/react';

import { ButtonProps } from "../src/components/Button/interface";

import Button from '../src/components/Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button
}

export default meta;

const Template: Story<any> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Disabled = Template.bind({});
export const PrimaryOutline = Template.bind({});
export const SecondaryOutline = Template.bind({});

Primary.args = {
  color: 'primary',
  children: 'Primary',
  onClick: () => {}
};

Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
  onClick: () => {}
};

Disabled.args = {
  color: 'primary',
  children: 'Disabled',
  disabled: true,
  onClick: () => {}
};

PrimaryOutline.args = {
  color: 'primary',
  children: 'Primary Outline',
  outline: true,
  onClick: () => {}
};

SecondaryOutline.args = {
  color: 'secondary',
  children: 'Secondary Outline',
  outline: true,
  onClick: () => {}
};