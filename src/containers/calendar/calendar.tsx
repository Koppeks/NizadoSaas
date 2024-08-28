import { Icon } from "@/components/icon/icon";
import { Spliter } from "@/components/spliter/spliter";
import { Text } from "@/components/text/text";
import { dateCalculator, getDisabledDays } from "@/libs/Calendar";
import { CalendarProps } from "@/utils/types/calendar.types";
import { forwardRef, useEffect, useRef, useState } from "react";

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ disableDays, events, ...props }, ref) => {
    //Months and weeks
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Dicember",
    ];
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const [today, setToday] = useState(new Date(Date.now()));
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const [date, setDate] = useState(today.getDate());
    // const [day, setDay] = useState(today.getDay())
    const [selectedDay, setSelectedDay] = useState([today.getDate()]);

    const [disabledDaysOfMonth, setDisabledDaysOfMonth] = useState(
      getDisabledDays(year, month, disableDays)
    );

    const [eventsState, setEventsState] = useState([])

    const { currentDaysOfMonth, lastDaysOfPrevMonth, firstDaysOfNextMonth } =
      dateCalculator(year, month, date);

    const renderDay = (day: number, disabled: boolean) => {

      const filteredDays = events?.filter(event => {
        if ( event.repetition &&(event.eventType === "REPETITION")) {
          return event.repetition.repeatedDays.includes(weekDays[new Date(year, month, day).getDay()]);
        }
        // Handle other event types if necessary
        return false;
      })

      return (
        <div
        key={day}
        onClick={() => (disabled ? setSelectedDay([day]) : null)}
        className={`day_box ${disabled && selectedDay.includes(day) && "selected"}`}
      >
        <Text as="p" className={`day ${!disabled && "not_from_current_month"}`}>
          {day}
        </Text>
        { disabled && filteredDays && filteredDays.map(event => (
          <div
            key={event.id}
            className="event_indicator"
            style={{ backgroundColor: event.color }}
            title={`${event.title} - ${event.repetition?.timeFrame}`}
          ></div>
          ))}
      </div>
      )
    };

    const iterationRef = useRef(false);

    useEffect(() => {
      if (iterationRef.current) {
        setToday(new Date(year, month, date));
        setDisabledDaysOfMonth(getDisabledDays(year, month, disableDays));
      }
      return () => {
        iterationRef.current = true;
      };
    }, [year, setYear, month, setMonth, date, setDate]);

    const handleChangeMonth = (type: string) => {
      if (type == "add") {
        if (month < 11) {
          setMonth(month + 1);
        } else {
          setMonth(0);
          setYear(year + 1);
        }
      }
      if (type == "reduce") {
        if (month != 0) {
          setMonth(month - 1);
        } else {
          setMonth(11);
          setYear(year - 1);
        }
      }
    };

    return (
      <div className="Calendar_Component">
        <div className="calendar_navbar">
          <Text as="p">
            {today.toLocaleString("default", { month: "long" })} {selectedDay}, {year}
          </Text>
          <div className="calendar_arrows">
            <Icon
              className="left"
              icon="arrow_icon"
              size="medium"
              outlineColor="orange"
              onClick={() => handleChangeMonth("reduce")}
            />
            <Icon
              className="right"
              icon="arrow_icon"
              size="medium"
              outlineColor="orange"
              onClick={() => handleChangeMonth("add")}
            />
          </div>
        </div>
        <Spliter
          spliterType="full"
          spliterColor="blurred"
          spliterStyle="strong"
        />
        <div className="calendar_weekdays">
          {weekDays.map((day, index) => (
            <Text key={index} as="p">
              {day.slice(0, 3)}
            </Text>
          ))}
        </div>
        <Spliter
          spliterType="full"
          spliterColor="blurred"
          spliterStyle="strong"
        />
        <div className="calendar_days" id="days">
          {lastDaysOfPrevMonth.map((day) => renderDay(day, false))}
          {currentDaysOfMonth.map((day) => {
            if (disabledDaysOfMonth.includes(day)) {
              return renderDay(day, false);
            }
            return renderDay(day, true);
          })}
          {firstDaysOfNextMonth.map((day) => renderDay(day, false))}
        </div>
      </div>
    );
  }
);
