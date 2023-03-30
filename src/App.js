import "./App.css";
import Countdown from "react-countdown";

const App = () => {
  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {seconds < 10 && "0"}
        {seconds}
      </span>
    );
  };

  return (
    <div className="App isRed">
      <div className="countdown">
        <Countdown date={Date.now() + 15000} renderer={renderer} />
      </div>
    </div>
  );
};

export default App;
