import React, { useEffect, useState } from "react";
function TimeFrameSelector({ setTimeFrame }) {
  return (
    <div className="btndiv">
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          type="button"
          className="timebtn btn btn-primary"
          onClick={() => setTimeFrame("daily")}
        >
          Left
        </button>
        <button
          type="button"
          className=" timebtn btn btn-primary"
          onClick={() => setTimeFrame("weekly")}
        >
          Middle
        </button>
        <button
          type="button"
          className="timebtn btn btn-primary"
          onClick={() => setTimeFrame("monthly")}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default TimeFrameSelector;
