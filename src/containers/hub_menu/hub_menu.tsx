"use client";

import { ButtonHub } from "@/components/button/button";
import { forwardRef } from "react";

export const HubMenu = forwardRef<HTMLDivElement>(({ ...props }, ref) => {

  return (
    <div ref={ref}>
      <ButtonHub text="Dashboard" icon="icon_home" expandedElements={
        [
          {expandText: "Overview", redirectTo: "/overview"},
          {expandText: "Statistics", redirectTo: "/statistics"},
          {expandText: "Recent Activity", redirectTo: "/recent-activity"},
          {expandText: "Notifications", redirectTo: "/notifications"},
          {expandText: "Settings", redirectTo: "/settings"},
        ]
        } />
      <ButtonHub text="Calendars" icon="icon_calendar" expandedElements={
        [
          {expandText: "Overview", redirectTo: "/overview"},
          {expandText: "Statistics", redirectTo: "/statistics"},
          {expandText: "Recent Activity", redirectTo: "/recent-activity"},
          {expandText: "Notifications", redirectTo: "/notifications"},
          {expandText: "Settings", redirectTo: "/settings"},
        ]
        } />
    </div>
  );
});
