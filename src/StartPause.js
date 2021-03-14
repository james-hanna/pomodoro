import React from "react";

export default function StartPause({
  classNames,
  values,
  setValues,
  initialState,
}) {
  function playPause() {
    if (values.stopped === true) {
      setValues({
        ...values,
        focusCount: values.focusTimer * 60,
        breakCount: values.breakTimer * 60,
        status: !values.status,
        stopped: false,
      });
    } else {
      setValues({
        ...values,
        status: !values.status,
      })
    }
  }

  function stopButtonHandler() {
    setValues({ ...initialState });
  }
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            onClick={() => {
              playPause();
            }}
            id="playPause"
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !values.status,
                "oi-media-pause": values.status,
              })}
            />
          </button>
          <button
            onClick={stopButtonHandler}
            id="stopButton"
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}
