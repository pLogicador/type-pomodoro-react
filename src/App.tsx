/* eslint-disable */
import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        defaultPomodoroTime={20}
        shortRestTime={10}
        longRestTime={5}
        cycles={4}
      />
    </div>
  );
}

export default App;
