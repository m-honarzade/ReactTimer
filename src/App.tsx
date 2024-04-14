import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import Container from "./components/UI/Container";

function App() {
  return (
    <Container as="div">
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </Container>
  );
}

export default App;
