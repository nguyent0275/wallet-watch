// css imports
// needs to go first to render styling correct
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// react imports
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import ViewBudget from "./pages/ViewBudget/ViewBudget.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import SingleProfile from "./pages/SingleProfile/SingleProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/budget/:budgetId",
        element: <ViewBudget />,
      },
      {
        path: "/user",
        element: <SingleProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
