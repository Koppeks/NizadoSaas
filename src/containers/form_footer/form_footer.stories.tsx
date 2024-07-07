
import type { Meta, StoryObj } from "@storybook/react";

import { FormFooter } from "./form_footer";

const meta: Meta = {
  title: "Containers/footer",
  component: FormFooter,
  parameters:{
    layout: "centered",
    nextjs:{
      appDirectory: true,
      pathname: ""
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const footerSignIn: Story = {
  args:{
    actualEndpoint: "sign-in"
  }
}
export const footerSignUp: Story = {
  args:{
    actualEndpoint: "sign-up"
  }
}
export const footerForgotPassword: Story = {
  args:{
    actualEndpoint: "forgot-password"
  }
}