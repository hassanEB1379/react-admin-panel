import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from 'common/components/atoms/Avatar';
import exampleAvatar from 'common/assets/images/exampleAvatar.jpeg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'atom/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const AvatarExample = Template.bind({});

AvatarExample.args = {
    src: exampleAvatar,
};
