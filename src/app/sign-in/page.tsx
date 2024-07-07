import { NizadoLogo } from "@/components/nizado_logo/nizado_logo";
import { Text } from "@/components/text/text";
import { FormFooter } from "@/containers/form_footer/form_footer";
import { FormSignIn } from "@/containers/form_sign_in/form_sign_in";

export default function Signin() {
  return (
    <main className="Main_Form_Container">
      <div className="left_main_form">
        <NizadoLogo/>
      </div>
      <div className="right_main_form">
        <Text as="h2">Sign in</Text>
        <FormSignIn/>
        <FormFooter actualEndpoint="sign-in"/>
      </div>
    </main>
  )
}