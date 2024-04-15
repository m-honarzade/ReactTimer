import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import Container from "./components/UI/Container";
import TimersContextProvider from "./store/Timers-Context";

function App() {
  return (
    <TimersContextProvider>
      <Container as="div">
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </Container>
    </TimersContextProvider>
  );
}

export default App;
