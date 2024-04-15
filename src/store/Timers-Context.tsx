/* eslint-disable react-refresh/only-export-components */
import { type ReactNode, createContext, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
// ********************for reducer
const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};
type StartTimerAction = {
  type: "START_TIMER";
};
type StopTimerAction = {
  type: "STOP_TIMER";
};

type Action = {
  type: AddTimerAction | StartTimerAction | StopTimerAction;
};

const timersReducer = (state: TimersState, action: Action): TimersState => {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    case "START_TIMER":
      return { ...state, isRunning: true };
    case "STOP_TIMER":
      return { ...state, isRunning: false };
    default:
      return state;
  }
};

// ********************************

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) throw new Error("something went wrong!!!");
  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const [timerState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timerState.timers,
    isRunning: timerState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimer() {
      dispatch({ type: "STOP_TIMER" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
