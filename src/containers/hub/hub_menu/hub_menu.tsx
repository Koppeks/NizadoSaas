"use client";

import { ButtonHub } from "@/components/button/button";
import { Text } from "@/components/text/text";
import useStore from "@/redux/UseStore";
import { forwardRef } from "react";

export const HubMenu = forwardRef<HTMLDivElement>(({ ...props }, ref) => {

  const {user} = useStore()

  return (
    <div ref={ref} className="container_hub_menu">
      <div className="top">
        <i className="nizado_logo"></i>
        <Text as="h4">{user?.subscription || "Subscription"}</Text>
      </div>
      <div className="menu">
        <ButtonHub text="Dashboard" icon="icon_home" expandedElements={
          [
            {expandText: "Overview", redirectTo: "/dashboard/overview"},
            {expandText: "Recent Activity", redirectTo: "/dashboard/recent-activity"},
          ]
          } />
        <ButtonHub text="Calendars" icon="icon_calendar" expandedElements={
          [
            {expandText: "All calendars", redirectTo: "/calendar/all"},
            {expandText: "Create new", redirectTo: "/calendar/new"},
          ]
          } />
      </div>
    </div>
  );
});
