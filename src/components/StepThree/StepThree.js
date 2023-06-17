import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setCurrentStep } from '../../store/stepSlice';
import { setUserFormData, userFormDataSelector } from '../../store/formSlice';


import { ReactComponent as DoneIcon } from './assets/Vector.svg'
import s from './StepThree.module.scss';
import { useSendDataMutation } from '../../formServices/formApi';
import { isModalSelector, setModal } from '../../store/modalSlice';
import Modal from '../Modal/Modal';

function StepThree() {
  const dispatch = useDispatch();
  const formData = useSelector(userFormDataSelector);
  const isModal = useSelector(isModalSelector)
  const [sendForm, {isSuccess, isError}] = useSendDataMutation();

  useEffect(() => {
    if(isSuccess || isError) {
      dispatch(setModal(true))
    }
  }, [isSuccess, isError])

  const submitFormData = async (data) => {
    const newChecked = data.checked.map((item) => +item)
    const newData = {
      ...data,
      'checked': newChecked

    }
    try {
      await sendForm(newData).unwrap()
    } catch (err) {
      console.error('Failed to save the post: ', err)
    }
  }


  const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        about: ''
      },
      validationSchema: Yup.object({
        about: Yup.string().matches(/^[а-яА-ЯёЁa-zA-Z0-9\s]+$/).min(2).max(200).required()
      }),
      onSubmit: (values) => {
        dispatch(setUserFormData({
          ...formData,
          'about': values.about
        }))
        submitFormData({
          ...formData,
          'about': values.about
        })
      }
  })

  const letterCounter = (str) => {
    const counter = str.replace(/\s/, '')

    return counter.length
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
      <form className={s.stepThreeForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="field-about">About</label>
        <textarea
          name="about"
          id="field-about"
          cols="30"
          rows="10"
          placeholder='placeholder'
          value={formik.values.about}
          onChange={formik.handleChange}
        >
          {formik.values.about}
        </textarea>
        <div className={s.letterCounter}>
          {letterCounter(formik.values.about)}
        </div>
        { formik.touched.about && formik.errors.about ?
          <div className={s.errMessage}>{formik.errors.about}</div>
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
            id="button-send"
            type='submit'
            className={s.nextButton}
          >
            Отправить
          </button>
        </div>
      </form>
      {
        isModal && isSuccess ? <Modal isSuccess /> : null
      }

      {
        isModal && isError ? <Modal isError /> : null
      }
    </div>
  );
};

export default StepThree;
