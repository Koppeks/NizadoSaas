import { IconicProps } from "@/utils/types/component.types";
import { forwardRef } from "react";
import { Text } from "../text/text";
import { useRouter } from "next/navigation";


export const Iconic = forwardRef<HTMLElement, IconicProps>(({text, icon, handler, redirectTo, ...props}, ref) => {
  
  const router = useRouter()

  const handleClick = () => {
    if (handler) {
      handler();
    } else if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return(
    <span ref={ref} className="preset_iconic" onClick={handleClick}>
      <div className="circle">
        <i className={icon}></i>
      </div>
      <Text className="text" as="p">{text !== "" && text}</Text>
    </span>
  )
})
