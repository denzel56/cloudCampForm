import React from 'react';
import { useSelector } from 'react-redux';
import { currentStepSelector } from '../../store/stepSlice';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

import s from './Create.module.scss';

function Create() {
  const currentStep = useSelector(currentStepSelector);

  const showCurrentStep = () => {
    switch(currentStep) {
      case 'two' :
        return <StepTwo />

      case 'three' :
        return <StepThree />

      default:
        return <StepOne />
    }
  }

  return (
    <div className={s.root}>
      {showCurrentStep()}
    </div>
  );
};

export default Create;
