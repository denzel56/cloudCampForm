import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setCurrentStep } from '../../store/stepSlice';
import { setUserFormData, userFormDataSelector } from '../../store/formSlice';

import { ReactComponent as DoneIcon } from './assets/Vector.svg';
import removeIcon from './assets/remove.png';
import s from './StepTwo.module.scss';

const checkboxGroup = [1, 2, 3];
const radioGroup = [1, 2, 3];

function StepTwo() {
  const [adv, setAdv] = useState(['', '', '']);
  const dispatch = useDispatch();
  const formData = useSelector(userFormDataSelector);

  useEffect(() => {
    if (formData.advantages) {
      setAdv(formData.advantages)
    }
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      advantages: adv,
      checked: [],
      radio: ''
    },
    validationSchema: Yup.object({
      advantages: Yup.array().of(Yup.string().matches(/^[а-яА-ЯёЁa-zA-Z]+$/).min(2).max(30)),
      radio: Yup.number(),
      checked: Yup.array().of(Yup.number())
    }),
    onSubmit: (values) => {
      dispatch(setUserFormData({
        ...formData,
        'advantages': values.advantages,
        'checked': values.checked,
        'radio': values.radio
      }))
      dispatch(setCurrentStep('three'));
    }
  })

  const handleCangeInput = (e) => {
    setAdv(prevState => {
      const newArr = [...prevState];
      const index = e.target.id.slice(-1);

      newArr[index-1] = e.target.value;

      return newArr
    })
  }

  const handleClickRemove = (id) => {
    setAdv(prevState => {
      const newArr = [...prevState];

      newArr.splice(id, 1);

      return newArr
    })
  }

  const handleClickAdd = () => {
    setAdv(prevState => {
      const newArr = [...prevState, ''];

      return newArr
    })
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
        <label htmlFor="advantages">Advantages
        {
          formik.values.advantages.map((item, index) => (
            <div className={s.advantagesItem}>
              <input
                id={`field-advantages-${index + 1}`}
                type='text'
                placeholder='advantages'
                onChange={handleCangeInput}
                value={item}
              />
              <button type="button"
                className={s.removeIcon}
                id={`button-remove-${index + 1}`}
                onClick={() => handleClickRemove(index)}
              >
                <img src={removeIcon} alt="trash" />
              </button>
            </div>

            ))
          }
          {
            formik.touched.advantages && formik.errors.advantages ?
              <div className={s.errMessage}>{formik.errors.advantages}</div>
              : null
          }
        </label>

        <button
          type='button'
          className={s.addButton}
          onClick={handleClickAdd}
          >
            +
        </button>

        <div className={s.checkedLabel}>Checked group</div>
        {
          checkboxGroup.map((item) => (
            <label htmlFor={`field-checkbox-group-option-${item}`}  className={s.checkboxItem}>
              <input
                type="checkbox"
                id={`field-checkbox-group-option-${item}`}
                name='checked'
                onChange={formik.handleChange}
                value={item}/>
              {item}
            </label>
          ))
        }
        {
          formik.touched.checked && formik.errors.checked ?
            <div className={s.errMessage}>{formik.errors.checked}</div>
            : null
        }

        <div className={s.radioLabel}>Radio group</div>
        {
          radioGroup.map((item) => (
            <label htmlFor={`field-checkbox-group-option-${item}`}  className={s.checkboxItem}>
              <input
                type="radio"
                id={`field-checkbox-group-option-${item}`}
                name='radio'
                onChange={formik.handleChange}
                value={item}/>
              {item}
            </label>
          ))
        }
        {
          formik.touched.radio && formik.errors.radio ?
            <div className={s.errMessage}>{formik.errors.radio}</div>
            : null
        }

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
          >
            Далее
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
