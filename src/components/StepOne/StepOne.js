import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { userFormDataSelector, setUserFormData } from '../../store/formSlice';
import { setCurrentStep } from '../../store/stepSlice';

import s from './StepOne.module.scss';

const options = [{
  value: 'man',
  label: 'man'
},
{
  value: 'woman',
  label: 'woman'
}]

function StepOne () {
  const formData = useSelector(userFormDataSelector);
  const [currentSex, setCurrentSex] = useState(formData && formData.sex ? formData.sex : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      nickname: formData && formData.nickname ? formData.nickname : '',
      name: formData && formData.name ? formData.name : '',
      sername: formData && formData.sername ? formData.sername : ''
    },
    validationSchema: Yup.object({
      nickname: Yup.string().matches(/^[а-яА-ЯёЁa-zA-Z0-9]+$/).min(2).max(30).required('Введите nickname'),
      name: Yup.string().matches(/^[а-яА-ЯёЁa-zA-Z]+$/).min(2).max(50).required('Введите name'),
      sername: Yup.string().matches(/^[а-яА-ЯёЁa-zA-Z]+$/).min(2).max(50).required('Введите sername'),
    }),
    onSubmit: (values) => {
      dispatch(setUserFormData({
        ...formData,
        'nickname': values.nickname,
        'name': values.name,
        'sername': values.sername,
        'sex': currentSex,
      }))
      dispatch(setCurrentStep('two'))
    }
  })

  const getCurrentSex = () => currentSex ? options.find(o => o.value === currentSex) : ''

  const handleClickBack = () => {
    navigate('/')
  }

  const handleChangeSelect = (newValue) => {
    setCurrentSex(newValue.value);
  }


  return (
    <div className={s.root}>
      <div className={s.statusBar} />
      <div className={s.steps}>
        <div className={s.stepItem}>
          <div className={s.point}/>
        </div>
        <div className={s.stepItem} />
        <div className={s.stepItem} />
      </div>
      <div className={s.stepsNum}>
        <div className={s.num}>1</div>
        <div className={s.num}>2</div>
        <div className={s.num}>3</div>
      </div>
      <form className={s.stepOneForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="nickname">Nickname</label>
        <input
          id="field-nickname"
          type="text"
          name="nickname"
          placeholder='nickname'
          onChange={formik.handleChange}
          value={formik.values.nickname}
        />
        { formik.touched.nickname && formik.errors.nickname ?
          <div className={s.errMessage}>{formik.errors.nickname}</div>
          : null
        }

        <label htmlFor="name">Name</label>
        <input
          id="field-name"
          type="text"
          name="name"
          placeholder='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        { formik.touched.name && formik.errors.name ?
          <div className={s.errMessage}>{formik.errors.name}</div>
          : null
        }

        <label htmlFor="name">Sername</label>
        <input
          id="field-sername"
          type="text"
          name="sername"
          placeholder='sername'
          onChange={formik.handleChange}
          value={formik.values.sername}
        />
        { formik.touched.sername && formik.errors.sername ?
          <div className={s.errMessage}>{formik.errors.sername}</div>
          : null
        }

        <label htmlFor="sex">Sex</label>
        <Select
          classNamePrefix='custom-select'
          options={options}
          placeholder='Не выбрано'
          onChange={handleChangeSelect}
          isSearchable={false}
          required
          inputId='field-sex'
          value={getCurrentSex()}
        />


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
            id='button-next'
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

export default StepOne;
