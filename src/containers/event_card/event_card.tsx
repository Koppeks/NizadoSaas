import { Icon } from "@/components/icon/icon";
import { Spliter } from "@/components/spliter/spliter";
import { Text } from "@/components/text/text";
import { Event } from "@/redux/redux.types";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Modal } from "../modal/modal";
import { Button } from "@/components/button/button";
import { deleteEvent, getAllEvents } from "@/utils/api_requests/eventForms";
import useStore from "@/redux/UseStore";
import { AxiosResponse } from "axios";
export const EventCard = forwardRef<HTMLDivElement, { event: Event }>(
  ({ event, ...props }, ref) => {
    const iterationRef = useRef(false);

    const [isActive, setIsActive] = useState(false);
    const [modalForDelete, setModalForDelete] = useState(false);

    const {resetEvents, addEvents} = useStore()

    useEffect(() => {
      if (iterationRef.current) {
        console.log(event);
      }
      return () => {
        iterationRef.current = true;
      };
    }, []);

    const deleteCurrentEvent = async (eventId: string) => {
      const response = await deleteEvent(eventId)
      if(response.status === 200){
        resetEvents()
        const result = await getAllEvents() as AxiosResponse
          addEvents(result.data.payload)
      }
    };

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
          </div>
          <div className="event_interaction">
            <Text textColor="blue" as="p">
              Edit
            </Text>
            <Text
              textColor="blue"
              as="p"
              onClick={() => setIsActive(!isActive)}
            >
              Open to view
            </Text>
            <Text
              textColor="red"
              bold
              as="p"
              onClick={() => setModalForDelete(!modalForDelete)}
            >
              Delete
            </Text>
          </div>
        </div>
        <div className={`event_display ${isActive && "active"}`}>
          <Spliter
            spliterType="full"
            spliterColor="blurred"
            spliterStyle="strong"
          />
          <div className="event_full_data">
            <Icon icon="calendar_icon" size="big" />
            <div className="data">
              <div className="details">
                <Icon icon="calendar_icon" size="small" outlineColor="gray" />
                <Text>Date</Text>
              </div>
              <div className="details">
                <Icon icon="clock_icon" size="small" outlineColor="gray" />
                <Text>
                  {event.repetition?.timeFrame.split("-")[0]} -{" "}
                  {event.repetition?.timeFrame.split("-")[1]}
                </Text>
              </div>
              <div className="details">
                <Icon
                  icon="calendar_day_icon"
                  size="small"
                  outlineColor="gray"
                />
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
          <Text as="p" blur>
            Is assigned to a calendar{" "}
          </Text>
        </div>
        {modalForDelete && (
          <Modal
            isOpen={modalForDelete}
            handleClose={() => setModalForDelete(false)}
            className="modal_delete"
          >
            <Text
              className="close"
              as="p"
              textColor="red"
              bold
              pointer
              onClick={() => setModalForDelete(false)}
            >
              X
            </Text>
            <Text className="content" as="p">
              Are you sure you want to delete the event {event.title}
            </Text>
            <div className="buttons">
              <Button
                onClick={() => setModalForDelete(false)}
                variant="secondary"
                type="button"
              >
                <Text as="p">Close</Text>
              </Button>
              <Button
                onClick={() => deleteCurrentEvent(event.id)}
                variant="primary"
                type="button"
              >
                <Text as="p">Delete</Text>
              </Button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
);
