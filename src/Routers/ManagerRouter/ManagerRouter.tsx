import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ManagerLayout from "../../Layout/ManagerLayout/ManagerLayout";
import TourManager from "../../Pages/Manager/Tour/TourManager";
import UserManager from "../../Pages/Manager/User/UserManager";
import MainManager from "../../Pages/Manager/Main/MainManager";
import AirplaneManager from "../../Pages/Manager/Airplane/AirplaneManager";
import MainClient from "../../Pages/Client/Main/MainClient";
import Applications from "../../Pages/Client/Applications/Applications";
import ClientLayout from "../../Layout/ClientLayout/ClientLayout";
import { isLogginApi } from "../../services/TourService";
import Authorization from "../../Pages/Manager/Аuthorization/Authorization";
const routerManager = createBrowserRouter([
  {
    path: "/",
    element: <ManagerLayout />,
    errorElement: <h3>SOSI</h3>,
    children: [
      { index: true, element: <MainManager /> },
      {
        path: "user",
        element: <UserManager />,
      },
      {
        path: "tour",
        element: <TourManager />,
      },
      {
        path: "airplane",
        element: <AirplaneManager />,
      },
      {
        path: "client",
        element: <MainClient />,
      },
    ],
  },
]);

const routerClient = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    errorElement: <h3>SOSI</h3>,
    children: [
      { index: true, element: <MainClient /> },
      {
        path: "manager",
        element: <Authorization />,
      },
      { path: "applications", element: <Applications /> },
    ],
  },
]);
const AppRouter = () => {
  const { data: isLoggin } = isLogginApi.useFetchIsLogginQuery("");
  return (
    <div>
      {isLoggin?.isLoggin === false ? (
        <RouterProvider router={routerClient} />
      ) : (
        <RouterProvider router={routerManager} />
      )}
    </div>
  );
};

export default AppRouter;

//<RouterProvider router={routerManager} />
