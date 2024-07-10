import { forwardRef } from "react";


export const LoaderAnimation = forwardRef<HTMLDivElement> (({...props}, ref) => {
  return(
    <div ref={ref} className="loader">

    </div>
  )
})