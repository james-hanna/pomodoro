import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import StartPause from "../StartPause";
import Timer from "../Timer";
import DurationFocus from "../DurationFocus";

function Pomodoro() {
  const initialState = {
    focusCount: 1500,
    focusTimer: 25,
    focusInc: 5,
    breakCount: 300,
    breakTimer: 5,
    breakInc: 1,
    status: false,
    onBreak: false,
    stopped: true,
  }
  const [values, setValues] = useState({...initialState});

  useInterval(
    () => {
      switch (true) {
        case values.focusCount === 0:
          setValues(() => {
            return {
              ...values,
              focusCount: values.focusTimer * 60,
              onBreak: true,
            };
          });
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          break;
        case values.breakCount === 0:
          setValues(() => {
            return {
              ...values,
              breakCount: values.breakTimer * 60,
              onBreak: false,
            };
          });
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          break;
        case values.onBreak:
          setValues(() => {
            return { ...values, breakCount: values.breakCount - 1 };
          });
          break;
        case !values.onBreak:
          setValues(() => {
            return { ...values, focusCount: values.focusCount - 1 };
          });
          break;
        default:
          break;
      }
    },
    values.status ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <DurationFocus values={values} setValues={setValues} />
      <StartPause
        classNames={classNames}
        values={values}
        setValues={setValues}
        initialState={initialState}
      />
      <Timer values={values}/>
    </div>
  );
}

export default Pomodoro;
