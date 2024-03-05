import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ViewBudget from './pages/ViewBudget.jsx';
import ViewAllBudgets from './pages/ViewAllBudgets.jsx';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/viewBudget',
        element: <ViewBudget />
      }, {
        path: '/viewAllBudgets',
        element: <ViewAllBudgets/>
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
