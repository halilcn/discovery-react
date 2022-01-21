import { Link } from 'react-router-dom';

export const Login = (props) => {
  return (
    <div className="bg-gray-300 p-6">
      <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg px-4 py-4 shadow-lg">
        <input type="text"
               placeholder="Email or Phone Number"
               className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"/>
        <input type="text" placeholder="Password"
               className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"/>
        <div className="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider">Log
          In
        </div>
        <div className="flex justify-center my-4">
          <a className="text-blue-500 text-sm" href="#">Forgot account?</a>
        </div>
        <div className="flex justify-center my-6">
          <div className="text-white h-12 rounded px-6 font-bold">Create
            new Account
          </div>
        </div>
        <Link to="/register">register</Link>
      </div>
    </div>
  );
};
