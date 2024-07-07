import { forwardRef } from "react";
import { Text } from "../../components/text/text";
import { Button, ButtonRedirect } from "../../components/button/button";
import { FormFooterProps } from "@/utils/types/component.types";


export const FormFooter = forwardRef<HTMLElement, FormFooterProps>(({actualEndpoint, ...props}, ref) => {
  return(
    <footer className="Form_Footer">
      <Text as="h4">
        {actualEndpoint == "sign-in" ? 
          "Or sign in with"
          :
        actualEndpoint == "sign-up" ?
          "Or sign up with"
          :
          ""
        }
      </Text>
      <div className="primary_options">
        {actualEndpoint !== "forgot-password" ?
        <>
        <Button type="button" variant="tertiary">Google</Button>
        <Button type="button" variant="tertiary">Facebook</Button>
        </>  
        :
        null
      }
        
      </div>
      <div className="secondary_options">
        {actualEndpoint == "sign-up" ? 
        <>
          <ButtonRedirect redirectTo="/forgot-password" type="button" variant="quaternary">Forgot the password?</ButtonRedirect>
          <ButtonRedirect redirectTo="/sign-in" type="button" variant="quaternary">I have an account</ButtonRedirect>  
        </>
        :
        actualEndpoint == "sign-in" ? 
        <>
          <ButtonRedirect redirectTo="/forgot-password" type="button" variant="quaternary">Forgot the password?</ButtonRedirect>
          <ButtonRedirect redirectTo="/sign-up" type="button" variant="quaternary">Create an account</ButtonRedirect>  
        </> 
        :
        <>
          <ButtonRedirect redirectTo="/sign-up" type="button" variant="quaternary">Create an account</ButtonRedirect> 
          <ButtonRedirect redirectTo="/sign-in" type="button" variant="quaternary">I have an account</ButtonRedirect>  
        </> 
        }
      </div>
    </footer>
  )
})