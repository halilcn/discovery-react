import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import helpers from '../../../others/helpers';
import { routes } from '../../../routes/index';
import handle from '../../../others/handle';
import { postRegister } from '../../../services/auth';

import './register.css';

export const Register = () => {
  const [registerButtonDisable, setRegisterButtonDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm();
  let history = useNavigate();

  const validations = {
    email: {
      ...register(
        'email',
        {
          required: 'Email is required',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email'
          }
        })
    },
    password: {
      ...register(
        'password',
        {
          required: 'Password is required'
        })
    }
  };

  useEffect(() => {
    if (helpers.isAuth()) {
      history(routes.dashboard.children.main.fullPath);
    }
  });

  useEffect(() => {
    setRegisterButtonDisable((!isValid && !isDirty) || loading);
  }, [isValid, isDirty, loading]);

  const registerAction = (data) => {
    handle(async () => {
      setLoading(true);
      await postRegister();
      history(routes.dashboard.children.main.fullPath);
    })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="user-action-container">
      <div className="content">
        <form onSubmit={handleSubmit(registerAction)}>
          <input type="email"
                 placeholder="E-mail"
                 {...validations.email}/>
          {
            errors.email &&
            <div className="error">
              {errors.email?.message}
            </div>
          }

          <input type="password"
                 placeholder="Password"
                 {...validations.password}/>
          {
            errors.password &&
            <div className="error">
              {errors.password?.message}
            </div>
          }

          <input type="password"
                 placeholder="Repeat Password"/>

          <button
            type="submit"
            className={`action-btn ${registerButtonDisable ? 'disable' : 'active'}`}>
            Register
          </button>
        </form>
        <NavLink to={routes.login.path}
                 className="redirect-link">
          login
        </NavLink>
      </div>
    </div>
  );
};
