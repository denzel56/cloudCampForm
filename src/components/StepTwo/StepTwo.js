import React from 'react';

import { ReactComponent as DoneIcon } from './assets/Vector.svg';
import s from './StepTwo.module.scss';

function StepTwo() {
  return (
    <div className={s.root}>
      <div className={s.statusBar} />
      <div className={s.steps}>
        <div className={s.stepItem}>
          <DoneIcon />
        </div>
        <div className={s.stepItem} >
          <div className={s.point}/>
        </div>
        <div className={s.stepItem} />
      </div>
      <div className={s.stepsNum}>
        <div className={s.num}>1</div>
        <div className={s.num}>2</div>
        <div className={s.num}>3</div>
      </div>
    </div>
  );
};

export default StepTwo;
