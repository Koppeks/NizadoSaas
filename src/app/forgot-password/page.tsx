import { NizadoLogo } from "@/components/nizado_logo/nizado_logo";
import { Text } from "@/components/text/text";
import { FormFooter } from "@/containers/form_footer/form_footer";
import { FormForgotPassword } from "@/containers/form_forgot_password/form_forgot_password";

export default function ForgotPassword() {
  return (
    <main className="Main_Form_Container">
      <div className="left_main_form">
        <NizadoLogo/>
      </div>
      <div className="right_main_form">
        <Text as="h2">Forgot password</Text>
        <FormForgotPassword/>
        <FormFooter actualEndpoint="forgot-password"/>
      </div>
    </main>
  )
}