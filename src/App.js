import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './components/general/Login';
import { Register } from './components/general/Register';
import { Test } from './components/Test';
import { Test2 } from './components/Test2';
import { Dashboard } from './routes/dashboard';
import { Home } from './components/dashboard/Home';
import { UserList } from './components/dashboard/user/UserList';
import { UserDetail } from './components/dashboard/user/UserDetail';
import '../src/styles/default.css';

function App() {
  return (
    <div className="bg-red-50 h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<UserList/>}/>
          <Route path="/dashboard/home" component={<Home/>}/>
          <Route path="/dashboard/users" component={<UserList/>}/>
          <Route path="/dashboard/users/:userId" component={<UserDetail/>}/>


          <Route path="/test/" element={<Test/>}>
            <Route path="2" element={<Test2/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
