import React from 'react';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { setUserFormData, userFormDataSelector } from '../../store/formSlice';

import { ReactComponent as FolderIcon } from './assets/Vector.svg';
import s from './Main.module.scss';

function Main() {
  const dispatch = useDispatch();
  const formData = useSelector(userFormDataSelector);

  const formik = useFormik({
    initialValues: {
      phone: '',
      email: ''
    },
    validationSchema: Yup.object({
      phone: Yup.string().min(10).required('Введите номер телефона'),
      email: Yup.string().email('ошибка').required('Введите email')
    })
  })


  const handleClickStart = () => {
    console.log('start', formData)
    dispatch(setUserFormData({
      'phone': formik.values.phone,
      'email': formik.values.email
    }))
  }


  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.avatar}>АИ</div>
        <div className={s.userInfo}>
          <span>Иван Иванов</span>
          <div className={s.userLinks}>
            <div className={s.link}>
              <div className={s.icon}>
                <FolderIcon />
              </div>
              <div className={s.linkItem}>
                <a href="s#">Telegram</a>
              </div>
            </div>
            <div className={s.link}>
              <div className={s.icon}>
                <FolderIcon />
              </div>
              <div className={s.linkItem}>
                <a href="s#">GitHub</a>
              </div>
            </div>
            <div className={s.link}>
              <div className={s.icon}>
                <FolderIcon />
              </div>
              <div className={s.linkItem}>
                <a href="s#">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.line}/>
      <form className={s.startForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="phone">Номер телефона</label>
        <InputMask
          id="phone"
          type="text"
          name="phone"
          mask="+7\(999) 999-99-99"
          placeholder='+7 999 999-99-99'
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        { formik.touched.phone && formik.errors.phone ?
          <div>{formik.errors.phone}</div>
          : null
        }
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder='tim.jennings@example.com'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        { formik.touched.email && formik.errors.email ?
          <div>{formik.errors.email}</div>
          : null
        }
        <button
          id="button-start"
          type='submit'
          className={s.startButton}
          onClick={handleClickStart}
        >
          Начать
        </button>
      </form>
    </div>
  );
};

export default Main;
