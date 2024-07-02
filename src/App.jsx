import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="EASY" TargetTime="1 " />
        <TimerChallenge title=" NOT EASY" TargetTime="5 " />
        <TimerChallenge title="GETTING TOUGH" TargetTime="10 " />
        <TimerChallenge title="PROS ONLY" TargetTime="15 " />
      </div>
    </>
  );
}

export default App;
