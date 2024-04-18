import React, { FC, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useAppDispatch } from "./redux/hooks";
import { updateIsTimerRunning } from "./redux/slice/timerSlice";

interface TimerProps {
  expiryTimestamp: Date;
}

const Timer: FC<TimerProps> = ({ expiryTimestamp }) => {
  const { seconds, minutes, isRunning, start } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    dispatch(updateIsTimerRunning(isRunning));
  }, [isRunning]);

  return (
    <div style={{ fontSize: "100px" }}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default Timer;
