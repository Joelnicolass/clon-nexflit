import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginView from "../pages/login/views/LoginView";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    async lazy() {
      const PrivateLayout = await import(
        "../components/Layouts/PrivateLayout/PrivateLayout"
      );

      return {
        element: <PrivateLayout.default />,
      };
    },
    children: [
      {
        path: "/home",
        async lazy() {
          const HomeView = await import("../pages/home/views/HomeView");

          return {
            element: <HomeView.default />,
          };
        },
      },
    ],
  },
]);
