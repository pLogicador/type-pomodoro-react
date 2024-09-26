/* eslint-disable */
import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}/>

      <div className="controls">
        <Button text='test' onClick={()=> console.log(1) }></Button>
        <Button text='test' onClick={()=> console.log(1) }></Button>
        <Button text='test' onClick={()=> console.log(1) }></Button>
      </div>
      <div className="details">
        <p>Testing: loremipsum 123546</p>
        <p>Testing: loremipsum 123546</p>
        <p>Testing: loremipsum 123546</p>
        <p>Testing: loremipsum 123546</p>
      </div>
    </div>
  );
}

