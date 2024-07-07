import type { Meta, StoryObj } from "@storybook/react";
import { FormSignUp } from "./form_sign_up";

const meta: Meta = {
  title: "Containers/Forms/Sign up",
  component: FormSignUp,
  parameters:{
    layout: "centered",
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const form : Story= {
  args:{

  }
}
