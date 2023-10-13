import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ManagerLayout from "../../Layout/ManagerLayout/ManagerLayout";
import Tour from "../../Pages/Manager/Tour/Tour";
import User from "../../Pages/Manager/User/User";
import QWE from "../../Pages/Client/Main/Main";
import Main from "../../Pages/Manager/Main/Main";
import Airplane from "../../Pages/Manager/Airplane/Airplane";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerLayout />,
    errorElement: <h3>SOSI</h3>,
    children: [
      { index: true, element: <Main /> },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "tour",
        element: <Tour />,
      },
      {
        path: "airplane",
        element: <Airplane />,
      },
      {
        path: "client",
        element: <QWE />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
