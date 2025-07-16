import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '../storybook_component/Example/button'

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  onClick: () => alert('You clicked the secondary button'),
};