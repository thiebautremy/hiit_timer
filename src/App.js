import "./App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const App = () => {
  const redColor = "#ec292c";
  const blueColor = "#1a0d58";
  return (
    <div className="App">
      <div className="countdown" style={{ color: `${redColor}` }}>
        <CountdownCircleTimer
          isPlaying
          duration={15}
          colors={redColor}
          size={200}
          trailColor="#FFF"
          trailStrokeWidth={2}
          strokeWidth={12}
          isSmoothColorTransition={false}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default App;
