import React from "react";
import { minutesToDuration } from "./utils/duration/index";

export default function DurationFocus({ values, setValues }) {
  const restrictions = (num, min, max) =>
    num > max ? max : num < min ? min : num;

  const focusHandler = ({ target }) => {
    if(values.stopped === true)
    target.id === "decrease-focus"
      ? setValues(() => {
          return {
            ...values,
            focusTimer: restrictions(values.focusTimer - 5, 5, 60),
          };
        })
      : setValues(() => {
          return {
            ...values,
            focusTimer: restrictions(values.focusTimer + 5, 5, 60),
          };
        });
  };

  const breakHandler = ({ target }) => {
    if(values.stopped === true)
    target.id === "decrease-break"
      ? setValues(() => {
          return {
            ...values,
            breakTimer: restrictions(values.breakTimer - 1, 1, 15),
          };
        })
      : setValues(() => {
          return {
            ...values,
            breakTimer: restrictions(values.breakTimer + 1, 1, 15),
          };
        });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(values.focusTimer)}
          </span>
          <div className="input-group-append">
            <button
              onClick={focusHandler}
              id="decrease-focus"
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
            >
              <span className="oi oi-minus" />
            </button>
            <button
              onClick={focusHandler}
              id="increase-focus"
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(values.breakTimer)}
            </span>
            <div className="input-group-append">
              <button
                onClick={breakHandler}
                id="decrease-break"
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
              >
                <span className="oi oi-minus" />
              </button>
              <button
                onClick={breakHandler}
                id="increase-break"
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
