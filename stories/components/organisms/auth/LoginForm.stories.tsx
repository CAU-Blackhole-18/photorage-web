import {ComponentMeta, ComponentStory} from '@storybook/react';
import LoginForm, {LoginFormPropsType} from '@components/organisms/auth/LoginForm';

export default {
    title: 'LoginForm',
    component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) =>
    <LoginForm {...args} ></LoginForm>;

export const Primary = Template.bind({});
Primary.args = {
    isLoginPopupOpen: true
} as LoginFormPropsType;
