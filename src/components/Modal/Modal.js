import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModal } from '../../store/modalSlice';

import { ReactComponent as SuccessIcon } from './assets/success.svg'
import { ReactComponent as ErrorIcon } from './assets/error.svg'

import closeIcon from './assets/close.png'
import s from './Modal.module.scss';
import { setCurrentStep } from '../../store/stepSlice';
import { setUserFormData } from '../../store/formSlice';

function Modal({isSuccess, isError}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {

    if(isSuccess) {
      navigate('/')
      dispatch(setCurrentStep('one'))
      dispatch(setUserFormData({}))
    }
    dispatch(setModal(false))
  }

  return (
    <div className={s.root}>
      <div className={cn(s.modal, {
        [s.success]: isSuccess,
        [s.error]: isError
      })}>
        <div className={cn(s.modalHeader, {
          [s.headerError]: isError
        })}>
          {
            isSuccess && 'Форма успешно отправлена'
          }
          {
            isError && 'Ошибка'
          }
          {
            // eslint-disable-next-line
            isError && <div
              className={s.close}
              onClick={() => handleClick()}
            >
              <img src={closeIcon} alt="close" />
            </div>
          }
        </div>
        <div className={cn(s.circle, {
          [s.green]: isSuccess,
          [s.red]: isError
        })}>
          <div className={s.smallCircle}>
            {
              isSuccess && <SuccessIcon/>
            }
            {
              isError && <ErrorIcon />
            }
          </div>
        </div>
        {
          isSuccess && <button
          type='button'
          className={s.closeButton}
          onClick={handleClick}
          id='button-to-main'>
            На главную
        </button>
        }
        {
          isError && <button
          type='button'
          className={s.closeButton}
          onClick={handleClick}
          id='button-back'>
            Закрыть
        </button>
        }
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isSuccess: false,
  isError: false
}

Modal.propTypes = {
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool
}

export default Modal;
