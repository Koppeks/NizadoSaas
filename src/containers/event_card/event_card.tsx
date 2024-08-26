import { IconicMedium } from "@/components/iconic_medium/iconic";
import { Spliter } from "@/components/spliter/spliter";
import { Text } from "@/components/text/text";
import { Event } from "@/redux/redux.types";
import { forwardRef, useEffect, useRef, useState } from "react";

export const EventCard = forwardRef<HTMLDivElement, { event: Event }>(
  ({ event, ...props }, ref) => {
    const iterationRef = useRef(false);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      if (iterationRef.current) {
        console.log(event);
      }
      return () => {
        iterationRef.current = true;
      };
    }, []);

    return (
      <div className="event_card_container">
        <div className="event_main_display">
          <div className="event_info">
            {event.eventType == "REPETITION" && (
              <Text
                as="h5"
                className="event_type"
                style={{ backgroundColor: `${event.color}` }}
              >
                R
              </Text>
            )}
            {event.eventType == "LINEAL" && (
              <Text
                as="h5"
                className="event_type"
                style={{ backgroundColor: `${event.color}` }}
              >
                L
              </Text>
            )}
            {event.eventType == "SECUENCE" && (
              <Text
                as="h5"
                className="event_type"
                style={{ backgroundColor: `${event.color}` }}
              >
                S
              </Text>
            )}
            <Text as="h4">{event.title}</Text>
            {event.eventType == "REPETITION" && (
              <Text as="h4" style={{ opacity: "0.5", scale: "0.8" }}>
                {event.repetition?.timeFrame}
              </Text>
            )}
          </div>
          <div className="event_interaction">
            <Text as="p">Edit</Text>
            <Text as="p" onClick={() => setIsActive(!isActive)}>
              Open to view
            </Text>
          </div>
        </div>
        <div className={`event_display ${!isActive && "active"}`}>
          <div className="event_full_data">
            <IconicMedium icon="calendar_icon_medium" />
            <div className="data">
              <Text>
                From: {event.repetition?.timeFrame.split("-")[0]} To:{" "}
                {event.repetition?.timeFrame.split("-")[1]}
              </Text>
              <div>
                {event.repetition?.repeatedDays.map((day, index) => {
                  if (
                    event.repetition?.repeatedDays.length &&
                    event.repetition?.repeatedDays.length - 1 == index
                  )
                    return <Text key={index}>{day}</Text>;
                  return <Text key={index}>{day} - </Text>;
                })}
              </div>
            </div>
          </div>
          {event.description && (
            <>
              <Spliter
                spliterType="full"
                spliterColor="blurred"
                spliterStyle="strong"
              />
              <Text as="p">{event.description}</Text>
            </>
          )}
          <Spliter
            spliterType="full"
            spliterColor="blurred"
            spliterStyle="strong"
          />
          <Text as="p" blur >Is assigned to a calendar </Text>
        </div>
      </div>
    );
  }
);
