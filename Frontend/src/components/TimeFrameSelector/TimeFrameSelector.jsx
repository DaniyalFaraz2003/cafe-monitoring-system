import React, { useEffect, useState } from "react";
import "./TimeframeSelector.css";
function TimeFrameSelector({ setTimeFrame }) {
  return (
    <div className="btndiv">
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          type="button"
          className="timebtn btn btn-primary focus:bg-white focus:text-blue-600"
          onClick={() => setTimeFrame("daily")}
        >
          Daily
        </button>
        <button
          type="button"
          className=" timebtn btn btn-primary focus:bg-white focus:text-blue-600"
          onClick={() => setTimeFrame("weekly")}
        >
          Weekly
        </button>
        <button
          type="button"
          className="timebtn btn btn-primary focus:bg-white focus:text-blue-600"
          onClick={() => setTimeFrame("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default TimeFrameSelector;
