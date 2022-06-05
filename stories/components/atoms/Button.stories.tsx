import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {ButtonType, ButtonProps} from '../../../src/components/atoms/Button';

export default {
    title: 'Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
    <Button {...args} >버튼</Button>;

export const Primary = Template.bind({});
Primary.args = {
    buttonType: ButtonType.DEFAULT,
    disabled: false,
    rounded: false,
    className: 'shared',
    onClick: () => {
        console.log('hi');
    },
    style: {
        width: '100px',
        height: '40px'
    }
} as ButtonProps;
