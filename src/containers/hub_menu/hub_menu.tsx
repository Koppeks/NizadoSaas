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
            {expandText: "Statistics", redirectTo: "/dashboard/statistics"},
            {expandText: "Recent Activity", redirectTo: "/dashboard/recent-activity"},
            {expandText: "Notifications", redirectTo: "/dashboard/notifications"},
            {expandText: "Settings", redirectTo: "/dashboard/settings"},
          ]
          } />
        <ButtonHub text="Calendars" icon="icon_calendar" expandedElements={
          [
            {expandText: "All calendars", redirectTo: "/calendar/all"},
            {expandText: "Create new", redirectTo: "/calendar/new"},
            {expandText: "Shared Calendars", redirectTo: "/calendar/shared"},
            {expandText: "Calendar settings", redirectTo: "/calendar/settings"},
            {expandText: "Export/Import calendars", redirectTo: "/calendar/export-import"},
          ]
          } />
      </div>
    </div>
  );
});
