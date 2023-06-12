import React from 'react';
import StepOne from '../StepOne/StepOne';

import s from './Create.module.scss';

function Create() {
  return (
    <div className={s.root}>
      <StepOne />
    </div>
  );
};

export default Create;
