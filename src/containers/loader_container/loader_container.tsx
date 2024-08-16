import { LoaderAnimation } from "@/components/loader_animation/loader_animation";
import { forwardRef } from "react";

export const Loader = forwardRef<HTMLDivElement>(({...prop}, ref) => {
    return(
        <div className="container_loader">
            <LoaderAnimation/>
        </div>
    )
})