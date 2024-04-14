import Button from "./UI/Button";

const Header = () => {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="text-white font-bold text-xl tracking-wider">
        ReactTimer
      </h1>

      <Button el="button">Stop Timers</Button>
    </header>
  );
};
export default Header;
