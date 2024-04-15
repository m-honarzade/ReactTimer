import Button from "./UI/Button";
import { useTimersContext } from "../store/Timers-Context";

const Header = () => {
  const timersCtx = useTimersContext();
  return (
    <header className="flex flex-row justify-between">
      <h1 className="text-white font-bold text-xl tracking-wider">
        ReactTimer
      </h1>

      <Button el="button">
        {timersCtx.isRunning ? "stop" : "start"} Timers
      </Button>
    </header>
  );
};
export default Header;
