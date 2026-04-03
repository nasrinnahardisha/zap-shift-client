import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayouts from "../layouts/RootLayouts";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routers/PrivateRoute";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/Dashboard/TrackParcel/TrackParcel";
import BeARider from "../pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashboard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "../routers/AdminRoute";
import AssignRider from "../pages/Dashboard/AssignRider/AssignRider";
import RiderRoute from "../routers/RiderRoute";
import PendingDeliveries from "../pages/Dashboard/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../pages/MyEarnings/MyEarnings";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Home },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json"),
      },
      {
        path: "/beARider",
        element: (
          <PrivateRoute>
            <BeARider />
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/servicesCenter.json");
          return res.json();
        },
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRoute>
    ),
    children: [
      {index: true, element: <DashboardHome></DashboardHome>},
      {
        path: "myParcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "track",
        Component: TrackParcel,
      },

      {
        path: "assign-rider",
        element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
      },
       // rider only routes
      {
        path: 'pending-deliveries',
        element: <RiderRoute><PendingDeliveries></PendingDeliveries></RiderRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RiderRoute>
          <CompletedDeliveries></CompletedDeliveries>
        </RiderRoute>
      },
      {
        path: 'my-earnings',
        element: <RiderRoute>
          <MyEarnings></MyEarnings>
        </RiderRoute>
      },
       // admin only routes

          {
        path: 'pending-riders',
        element: <AdminRoute><PendingRiders></PendingRiders></AdminRoute>
      },
      {
        path: 'active-riders',
        element: <AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
      },
      {
        path: 'makeAdmin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      }
    ],
  },
]);
