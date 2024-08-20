import { forwardRef } from "react";

type spliterTypes = {
    spliterType: "normal" | "full",
    spliterStyle: "solid" | "dotted" | "dashed" | "strong",
    spliterColor: "blurred" | "strong"
}

export const Spliter = forwardRef<HTMLHRElement, spliterTypes>(({spliterStyle, spliterType, spliterColor, ...props}, ref) => {
    return(
        <hr className={`${spliterStyle} ${spliterType} ${spliterColor}`}/>
    )
})