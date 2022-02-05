import React from "react";
import { Meta, Story } from '@storybook/react';

import { TableProps } from "../components/Table/interface";

import Table from '../components/Table';

const meta: Meta = {
  title: 'Components/Table',
  component: Table
}

export default meta;

const data = [
  {
    name: "Amanda",
    age: "28",
    location: "Petrópolis - RJ",
  },
  {
    name: "Fernando",
    age: "30",
    location: "Itaboraí - RJ",
  },
  {
    name: "Julia",
    age: "22",
    location: "Magé - RJ",
  },
  {
    name: "Pedro",
    age: "42",
    location: "Nova Friburgo - RJ",
  },
  {
    name: "Maria",
    age: "38",
    location: "Teresópolis - RJ",
  },
];

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Location",
    accessor: "location"
  }
]

const Template: Story<any> = (args: TableProps) => <Table {...args} />;

export const MyTable = Template.bind({});

MyTable.args = {
  data: data,
  columns: columns,
};

MyTable.storyName = "Table with Filter"