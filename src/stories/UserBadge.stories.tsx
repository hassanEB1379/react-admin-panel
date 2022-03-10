import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserBadge from 'common/components/molecules/UserBadge';
import exampleAvatar from 'common/assets/images/exampleAvatar.jpeg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'molecules/UserBadge',
    component: UserBadge,
} as ComponentMeta<typeof UserBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserBadge> = args => <UserBadge {...args} />;

export const ExampleUserBadge = Template.bind({});

ExampleUserBadge.args = {
    username: 'hassanebr7',
    desc: 'Reactjs developer',
    avatarSrc: exampleAvatar,
};
