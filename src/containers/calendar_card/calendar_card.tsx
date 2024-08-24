import { Text } from "@/components/text/text";
import { Calendar } from "@/redux/redux.types";
import { forwardRef } from "react";


export const CalendarCard = forwardRef<HTMLDivElement, {calendar:Calendar}>(({ calendar , ...props}, ref) => {
    const date = new Date(calendar.created_at).getDate() + "/" + new Date(calendar.created_at).getMonth() + "/" + new Date(calendar.created_at).getFullYear();
    return (
        <div className="calendar_card_container">
            <section className="top_section">
                <Text as="h4">{calendar.title}</Text>
                <Text as="p">{date}</Text>
            </section>
            <div className="essential_information_grid">
                <div className="banned_days">
                    <Text className="essential_subtitles" as="h5">Banned days</Text>
                    {typeof calendar.bannedDays !== "undefined" && calendar.bannedDays.map((day, index) => (
                        <p key={index}>{day}</p>
                    ))}
                </div>
            </div>
        </div>
    )
})