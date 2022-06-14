import { Story, Meta } from '@storybook/react/types-6-0';

import CheckBox, { CheckBoxTypes } from '@components/atoms/CheckBoxButton';

export default {
  title: 'CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story<CheckBoxTypes> = (args) => <CheckBox {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  isChecked: true,
  children: '선택지',
};

export const UnSelected = Template.bind({});
UnSelected.args = {
  isChecked: false,
  children: 'choice',
};
