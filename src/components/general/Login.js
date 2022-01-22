import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Login = (props) => {
  const [test, setTest] = useState('test');
  const [test2, setTest2] = useState('');

  useEffect(() => {
    console.log('created edildi');

    /*return () => {
      alert('component delete ');
    };*/
  }, []);

  useEffect(() => {
    console.log('değişti !!');
    console.log(test);
  });

  useEffect(() => {
    setTest2(test + 'asdsa');
  }, [test]);

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <div className="bg-white w-1/3 rounded-xl p-5 shadow-lg ">
        {test2}-
        {test}
        <input type="email"
               value={test}
               onChange={(e) => {setTest(e.target.value);}}
               placeholder="E-mail"
               className="w-full mb-3 p-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"/>
        <input type="password" placeholder="Password"
               className="w-full mb-3 p-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"/>
        <div
          className="text-blue-600 mt-6 py-3 bg-blue-50 text-center mb-5 rounded-lg w-full font-bold text-xl tracking-wider cursor-pointer transition hover:bg-blue-100 hover:-translate-y-1">
          Log In
        </div>
        <NavLink to="/register"
                 className="text-gray-400 underline font-medium ">
          register
        </NavLink>
      </div>
    </div>
  );
};
