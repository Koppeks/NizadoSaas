import { IconicProps } from "@/utils/types/component.types";
import { forwardRef } from "react";
import { Text } from "../text/text";
import { useRouter } from "next/navigation";


export const Iconic = forwardRef<HTMLDivElement, IconicProps>(({text, icon, customFunction, redirectTo, ...props}, ref) => {
  
  const router = useRouter()

  const handleClick = () => {
    if (customFunction) {
      customFunction();
    } else if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return(
    <div ref={ref} className="preset_iconic" onClick={() => handleClick()}>
      <div className="circle">
        <i className={icon}></i>
      </div>
      {text !== "" && <Text className="text" as="p">{text}</Text>}
    </div>

  )
})
