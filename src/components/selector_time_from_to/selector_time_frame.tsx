import { ChangeEvent, forwardRef, useState } from "react";
import { Text } from "../text/text";
import { FormikErrors } from "formik";
import { newEventCreation } from "@/containers/event_form_create/event_form_create";

type SelectorTimeFromToTypes = {
    timeFrame: string,
    setFieldValue: (field: string, value:string, shouldValidate?: boolean) => Promise<void | FormikErrors<newEventCreation>>
}

export const SelectorTimeFrame = forwardRef<HTMLDivElement, SelectorTimeFromToTypes>(({timeFrame, setFieldValue,...props}, ref) => {
    
    const [fromValue, setFromValue] = useState<string>(timeFrame.split("-")[0])
    const [toValue, setToValue] = useState<string>(timeFrame.split("-")[1])

    const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setFromValue(value)
        setFieldValue("timeFrame", `${fromValue}-${toValue}`)
    }  
    const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setToValue(value)
        setFieldValue("timeFrame", `${fromValue}-${toValue}`)
    }  

    return (
        <div className="selector_timeframe">
            <div className="time">
                <Text as="p">From:</Text>
                <input type="time" value={fromValue} max={"23:59"} onChange={(e) => handleFromChange(e)}/>
            </div>
            <div className="time" >
                <Text as="p">To:</Text>
                <input type="time" value={toValue} max={"23:59"} min={fromValue || "00:00"} disabled={!fromValue} onChange={(e) => handleToChange(e)}/>
            </div>
        </div>
    )
})