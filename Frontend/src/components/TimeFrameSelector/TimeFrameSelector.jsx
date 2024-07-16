import React, { useEffect, useState } from "react";
import "./TimeframeSelector.css";
import { Tabs, Tab, TabsHeader } from "@material-tailwind/react";
function TimeFrameSelector({ setTimeFrame }) {
  const TABS = [
    {
      label: "Daily",
      value: "daily",
    },
    {
      label: "Weekly",
      value: "weekly",
    },
    {
      label: "Monthly",
      value: "monthly",
    },
  ];
  return (
    <Tabs value="daily" className="w-full md:w-max">
      <TabsHeader>
        {TABS.map(({ label, value }) => (
          <Tab onClick={() => setTimeFrame(value)} key={value} value={value}>
            &nbsp;&nbsp;{label}&nbsp;&nbsp;
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

export default TimeFrameSelector;
