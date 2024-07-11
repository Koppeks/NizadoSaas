
import type { Meta, StoryObj } from '@storybook/react';
import {ButtonHub} from './button';

const meta: Meta<typeof ButtonHub> = {
  title: 'Components/Buttons/ButtonHub',
  component: ButtonHub,
  parameters: {
    layout: 'centered',
    nextjs:{
      pathname: "",
    }
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    text: "Dashboard",
    icon: "icon_home",
    expandedElements:[
      {
        expandText: "Overview",
        redirectTo: "/hub/dashboard/overview"
      },
      {
        expandText: "Statistics",
        redirectTo: "/hub/dashboard/statistics"
      },
      {
        expandText: "Recent Activity",
        redirectTo: "/hub/dashboard/recent-activity"
      },
    ]
  },
};
