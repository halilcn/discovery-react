import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes/index';
import '../src/styles/default.css';

function App() {
  return (
    <div className="bg-red-50 h-full">
      <BrowserRouter>
        <Routes>
          <Route path={routes.login.path} element={routes.login.element}/>
          <Route path={routes.register.path} element={routes.register.element}/>
          <Route path={routes.dashboard.path} element={routes.dashboard.element}>
            <Route path={routes.dashboard.children.main.path} element={routes.dashboard.children.main.element}/>
            <Route path={routes.dashboard.children.users.path} element={routes.dashboard.children.users.element}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
