"use client";

import { EventCard } from "@/containers/event_card/event_card";
import { Loader } from "@/containers/loader_container/loader_container";
import { ManagmentHeaderAll } from "@/containers/managment_header_all/managment_header_all";
import useStore from "@/redux/UseStore";
import { getAllEvents } from "@/utils/api_requests/eventForms";
import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";

export default function All() {
  const { addEvents, userEvents } = useStore();
  const userId = useStore.getState().user?.id;
  const [isLoading, setIsLoading] = useState(false);

  const iterationRef = useRef(false)

  useEffect(() => {
    if(iterationRef.current){
      const fetchEvents = async () => {
        try {
          setIsLoading(true)
          if (typeof userId !== "string" ) {
            throw ({message: "The user ID needs to be a string"})
          }
          const result = await getAllEvents() as AxiosResponse
          addEvents(result.data.payload)
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchEvents();
    }

    return () => {iterationRef.current = true}

  }, []);

  return (
    <main className="all">
      <ManagmentHeaderAll pointer="events" />
      <div className="scrolleable_cards">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {userEvents.map((event, index) => {
              return <EventCard key={index} event={event} />
            }
            )}
          </>
        )}
      </div>
    </main>
  );
}
