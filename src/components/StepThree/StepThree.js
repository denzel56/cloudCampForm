import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as DoneIcon } from './assets/Vector.svg'
import { setCurrentStep } from '../../store/stepSlice';

import s from './StepThree.module.scss';

function StepThree() {
  const dispatch = useDispatch();

  const handleClickNext = () => {
    console.log('submit data')
  }

  const handleClickBack = () => {
    dispatch(setCurrentStep('two'))
  }

  return (
    <div className={s.root}>
      <div className={s.statusBar} />
      <div className={s.steps}>
        <div className={s.stepItem}>
          <DoneIcon />
        </div>
        <div className={s.stepItem} >
          <DoneIcon />
        </div>
        <div className={s.stepItem} >
          <div className={s.point}/>
        </div>
      </div>
      <div className={s.stepsNum}>
        <div className={s.num}>1</div>
        <div className={s.num}>2</div>
        <div className={s.num}>3</div>
      </div>
      <form className={s.stepTwoForm}>
        <div className={s.buttonBlock}>
          <button
            id='button-back'
            type='button'
            className={s.backButton}
            onClick={handleClickBack}
          >
            Назад
          </button>
          <button
            id="button-next"
            type='submit'
            className={s.nextButton}
            onClick={handleClickNext}
          >
            Далее
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
