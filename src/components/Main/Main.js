import React from 'react';
import { Formik, Form, Field } from 'formik'
import { ReactComponent as FolderIcon } from './assets/Vector.svg';
import s from './Main.module.scss';

function Main() {
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
      <Formik>
        <Form>
          <label htmlFor="phone">Номер телефона</label>
          <Field
            id="phone"
            type="tel"
            name="phone"
            required
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Main;
