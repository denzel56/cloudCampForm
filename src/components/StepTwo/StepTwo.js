import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setCurrentStep } from '../../store/stepSlice';
// eslint-disable-next-line
import { setUserFormData, userFormDataSelector } from '../../store/formSlice';

import { ReactComponent as DoneIcon } from './assets/Vector.svg';
import { ReactComponent as RemoveIcon } from './assets/Remove.svg';
import s from './StepTwo.module.scss';

const tags = [1, 2, 3]


function StepTwo() {
  const [adv, setAdv] = useState(['', '', '']);
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const formData = useSelector(userFormDataSelector);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      advantages: adv
    },
    validationSchema: Yup.object({
      arguments: Yup.array().of(Yup.string().matches(/^[а-яА-ЯёЁa-zA-Z]+$/).min(2).max(30))
    }),
    onSubmit: (values) => {
      console.log(values)
      // dispatch(setCurrentStep('three'));
    }
  })

  const generateKey = () => setTimeout(() => {
      new Date().getTime();
    }, 2)

  const handleCangeInput = (e) => {
    setAdv(prevState => {
      const newArr = [...prevState];
      const index = e.target.id.slice(-1);

      newArr[index-1] = e.target.value;

      return newArr
    })
  }

  const handleClickRemove = (e) => {
    setAdv(prevState => {
      const newArr = [...prevState];
      const index = e.target.id.slice(-1);

      newArr.splice(index, 1);

      return newArr
    })
  }

  const handleClickAdd = () => {
    setAdv(prevState => {
      const newArr = [...prevState, ''];

      return newArr
    })
  }


  const handleClickNext = () => {
    // dispatch(setCurrentStep('three'))
  }

  const handleClickBack = () => {
    dispatch(setCurrentStep('one'))
  }

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
      <form className={s.stepTwoForm} onSubmit={formik.handleSubmit}>

        <label htmlFor="advantages">Advantages</label>
        {
          formik.values.advantages.map((item, index) => (
            <div key={generateKey()} className={s.advantagesItem}>
              <input
                id={`field-advantages-${index + 1}`}
                type='text'
                placeholder='advantages'
                onChange={handleCangeInput}
                value={item}
              />
              <RemoveIcon
                className={s.removeIcon}
                id={`button-remove-${index + 1}`}
                onClick={handleClickRemove}
              />
            </div>
          ))
        }
        <button
          type='button'
          className={s.addButton}
          onClick={handleClickAdd}
          >
            +
        </button>




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

export default StepTwo;
