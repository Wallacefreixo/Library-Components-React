import React from "react";
import { Meta, Story } from '@storybook/react';

import { LoadingProps } from "../src/components/Loading/interface";

import Loading from '../src/components/Loading';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading
}

export default meta;

const Template: Story<any> = (args: LoadingProps) => <Loading {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  color: 'primary'
};

Secondary.args = {
  color: 'secondary'
};