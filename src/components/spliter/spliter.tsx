import { spliterTypes } from "@/utils/types/spliter.types";
import { forwardRef } from "react";


export const Spliter = forwardRef<HTMLHRElement, spliterTypes>(({spliterStyle, spliterType, spliterColor, ...props}, ref) => {
    

    
    return(
        <hr className={`${spliterStyle} ${spliterType} ${spliterColor}`}/>
    )
})