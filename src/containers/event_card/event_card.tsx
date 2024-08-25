import { Text } from "@/components/text/text";
import { Event } from "@/redux/redux.types";
import { forwardRef, useEffect, useRef } from "react";

export const EventCard = forwardRef<HTMLDivElement, { event: Event }>(
  ({ event, ...props }, ref) => {
    const iterationRef = useRef(false);

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
          <Text
            as="h4"
            style={{ opacity: "0.5", scale: "0.8"}}
          >
            {event.repetition?.timeFrame}
          </Text>
        )}
        </div>
        <div className="event_interaction">
          <Text as="p">Edit</Text>
          <Text as="p">Open to view</Text>
        </div>
      </div>
    );
  }
);
