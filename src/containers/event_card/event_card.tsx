import { Event } from "@/redux/redux.types";
import { forwardRef, useEffect, useRef } from "react";


export const EventCard = forwardRef<HTMLDivElement, {event: Event}>(({event,...props}, ref) => {

    
    const iterationRef = useRef(false)
    
    useEffect(() => {
        
        if(iterationRef.current){
            console.log(event)
        }

        return () => {iterationRef.current = true}
    },[])

    return (
        <div>
            {event.eventType == "REPETITION" && <p>R</p>}
            {event.eventType == "LINEAL" && <p>L</p>}
            {event.eventType == "SECUENCE" && <p>S</p>}
        </div>
    )
})