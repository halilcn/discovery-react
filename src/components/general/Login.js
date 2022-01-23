import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import helpers from '../../helpers';
import { routes } from '../../routes/index';

/*  useEffect(() => {
    console.log('created edildi');

    return () => {
      alert('component delete ');
    };
  }, []);

  useEffect(() => {
    setTest2(test + 'asdsa');
  }, [test]);*/

export const Login = (props) => {
  const [loginButtonDisable, setLoginButtonDisable] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm();
  let history = useNavigate();

  const onSubmit = async (data) => {
    // Fake login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    helpers.setAuthToStorage({ username: 'halil', token: 'asad409534ıuejfd94rej' });
    history(routes.dashboard.children.main.fullPath);
  };

  useEffect(() => {
    if (helpers.isAuth()) {
      history(routes.dashboard.children.main.fullPath);
    }
  }, []);

  useEffect(() => {
    setLoginButtonDisable((!isValid && !isDirty));
  }, [isValid, isDirty]);

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <div className="bg-white w-1/3 rounded-xl p-5 shadow-lg ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full  p-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"
            placeholder="E-mail"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email'
              }
            })} />
          {errors.email ? <div className="bg-red-50 p-3 text-red-500 rounded-lg mt-1">
            {errors.email?.message}
          </div> : ''}

          <input
            className="w-full p-4 mt-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })} />
          {errors.password ? <div className="bg-red-50 p-3 text-red-500 rounded-lg mt-1">
            {errors.password?.message}
          </div> : ''}

          <button
            type="submit"
            className={` mt-6 py-3 text-center mb-5 rounded-lg w-full font-bold text-xl tracking-wider cursor-pointer transition hover:bg-blue-100 hover:-translate-y-1 ${loginButtonDisable ? 'opacity-80 text-slate-400 bg-slate-200 pointer-events-none' : 'text-blue-600 bg-blue-50'} `}>
            Log In
          </button>
        </form>
        <NavLink to="/register"
                 className="text-gray-400 underline font-medium hover:text-gray-500">
          register
        </NavLink>
      </div>
    </div>
  );
};
