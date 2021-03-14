import React from "react";
import {
  secondsToDuration,
  minutesToDuration,
} from "./utils/duration/index.js";

export default function Timer({ values }) {

  function getPercent(count, timer) {
      return 100 - Math.floor(count / timer * 100)
    } 

  return (
    <div className={values.stopped ? "hidden" : null}>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {values.onBreak
              ? "On Break for " +
                minutesToDuration(values.breakTimer) +
                " minutes"
              : "Focusing for " +
                minutesToDuration(values.focusTimer) +
                " minutes"}{" "}
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {values.onBreak
              ? secondsToDuration(values.breakCount)
              : secondsToDuration(values.focusCount) + " remaining"}
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={
                values.onBreak
                ? getPercent(values.breakCount, values.breakTimer * 60)
                : getPercent(values.focusCount, values.focusTimer * 60)
              }
              style={{
                width: `${
                  values.onBreak
                  ? getPercent(values.breakCount, values.breakTimer * 60)
                  : getPercent(values.focusCount, values.focusTimer * 60)
                }%`
              }}s
            />
          </div>
        </div>
      </div>
    </div>
  );
}
