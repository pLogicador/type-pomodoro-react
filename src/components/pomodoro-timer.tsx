/* eslint-disable */
import React, { useEffect } from 'react';
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
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
  }, [working])

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  }

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}/>

      <div className="controls">
        <Button text='Work' onClick={()=> configureWork() }></Button>
        <Button text='test' onClick={()=> console.log(1) }></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={()=> setTimeCounting(!timeCounting)}
        ></Button>
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

