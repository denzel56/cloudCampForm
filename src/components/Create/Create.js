import React from 'react';

import StepOne from '../StepOne/StepOne';
// import StepTwo from '../StepTwo/StepTwo';

import s from './Create.module.scss';

function Create() {
  return (
    <div className={s.root}>
      <StepOne />
      {/* <StepTwo /> */}
    </div>
  );
};

export default Create;
