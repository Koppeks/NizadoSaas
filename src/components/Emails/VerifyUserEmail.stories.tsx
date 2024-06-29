import VerifyUserEmail from '@/components/Emails/VerifyUserEmail';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Templates Emails/Verify user',
  component: VerifyUserEmail,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof VerifyUserEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    username: "Tony",
    token: "Tonkentetkeonknek"
  },
};
