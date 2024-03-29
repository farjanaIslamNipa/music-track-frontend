import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";
import TrendingPage from "../pages/home/TrendingPage";
import RecommendedPage from "../pages/home/RecommendedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/trending',
        element: <TrendingPage />,
      },
      {
        path: '/recommended',
        element: <RecommendedPage />,
      },
   ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
