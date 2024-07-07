import { FormFooter } from "@/containers/form_footer/form_footer";
import { NizadoLogo } from "@/components/nizado_logo/nizado_logo";
import { Text } from "@/components/text/text";
import { FormSignUp } from "@/containers/form_sign_up/form_sign_up";

export default function SignUp() {
  return (
    <main className="Main_Form_Container">
      <div className="left_main_form">
        <NizadoLogo/>
      </div>
      <div className="right_main_form">
        <Text as="h2">Sign up</Text>
        <FormSignUp/>
        <FormFooter actualEndpoint="sign-up"/>
      </div>
    </main>
  )
}