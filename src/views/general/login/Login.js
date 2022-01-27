import { useState, useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import helpers from '../../../others/helpers';
import { routes } from '../../../routes/index';
import handle from '../../../others/handle';
import { postLogin } from '../../../services/auth';

import './login.css';

export const Login = () => {
  const [loginButtonDisable, setLoginButtonDisable] = useState(false);
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
    setLoginButtonDisable((!isValid && !isDirty) || loading);
  }, [isValid, isDirty, loading]);

  const login = (data) => {
    handle(async () => {
      setLoading(true);
      await postLogin();
      history(routes.dashboard.children.main.fullPath);
    })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="content">
        <form onSubmit={handleSubmit(login)}>
          <input
            placeholder="E-mail"
            {...validations.email} />
          {
            errors.email &&
            <div className="error">
              {errors.email?.message}
            </div>
          }

          <input
            placeholder="Password"
            {...validations.password} />
          {
            errors.password &&
            <div className="error">
              {errors.password?.message}
            </div>
          }

          <button
            type="submit"
            className={`login-btn ${loginButtonDisable ? 'disable' : 'active'} `}>
            Log In
          </button>
        </form>
        <NavLink to={routes.register.path}
                 className="redirect-link">
          register
        </NavLink>
      </div>
    </div>
  );
};
