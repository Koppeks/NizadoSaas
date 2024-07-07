import type { Meta, StoryObj } from "@storybook/react";
import { FormSignIn } from "./form_sign_in";

const meta: Meta = {
  title: "Containers/Forms/Sign in",
  component: FormSignIn,
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
