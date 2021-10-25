import React from 'react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    title: 'On-off mode stories',
    component: OnOff,
    changeModeOnOff: action('Hello')
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;


// export const OnMode = () => <OnOff onButton={true} changeModeOnOff={action('hey')}/>

export const OffMode = Template.bind({})
OffMode.args = {
    changeModeOnOff: action('Hello'),
    onButton: false
}

export const OnMode = Template.bind({})
OnMode.args = {
    changeModeOnOff: action('Hello'),
    onButton: true
}
