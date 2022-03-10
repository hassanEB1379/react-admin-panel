import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'common/components/atoms/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const ExampleButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleButton.args = {
    label: 'Button',
    color: 'primary',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
    label: 'Button with Icon',
    icon: 'fa-bold',
};

export const IconButton = Template.bind({});

IconButton.args = {
    icon: 'fa-bold',
};
