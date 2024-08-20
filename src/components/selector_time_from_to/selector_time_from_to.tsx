import { ChangeEvent, forwardRef, useState } from "react";
import { Text } from "../text/text";


type SelectorTimeFromToTypes = {
    from: "",
    to: ""
}

export const SelectorTimeFromTo = forwardRef<HTMLDivElement, SelectorTimeFromToTypes>(({from, to,...props}, ref) => {
    
    const [fromValue, setFromValue] = useState<string>(from)
    const [toValue, setToValue] = useState<string>(to)

    const timeToMinutes = (time:string) => {
        const [hours, minutes] = time.split(":").map(Number)
        return hours * 60 + minutes
    }

    const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setFromValue(value)
        if (fromValue && timeToMinutes(value) > timeToMinutes(toValue)) {
            setToValue("");
        }
    }  
    const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setToValue(value)
        if (timeToMinutes(value) >= timeToMinutes(fromValue)) {
            setToValue(value);
        }
    }  

    return (
        <div>
            <div>
                <Text as="p">From:</Text>
                <input type="time" value={fromValue} max={"23:59"} onChange={(e) => handleFromChange(e)}/>
            </div>
            <div >
                <Text as="p">To:</Text>
                <input type="time" value={toValue} max={"23:59"} min={fromValue || "00:00"} disabled={!fromValue} onChange={(e) => handleToChange(e)}/>
            </div>
        </div>
    )
})