import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
  const [isLoading, setIsLoading] = useState(false);
  const [loginButtonDisable, setLoginButtonDisable] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm();
  let history = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Fake login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    history('/dashboard');
  };

  useEffect(() => {
    setLoginButtonDisable((!isValid && !isDirty) || isLoading);
  }, [isValid, isDirty]);

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <div className="bg-white w-1/3 rounded-xl p-5 shadow-lg ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isLoading}
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
