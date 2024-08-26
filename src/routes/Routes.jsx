import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { UserLayout } from "../layouts/UserLayout";
import AboutPage from "../pages/commonPages/About/AboutPage";
import Login from "../pages/commonPages/Login/Login";
import Signup from "../pages/commonPages/Signup/Signup";
import CarList from "../pages/commonPages/CarList/CarList";
import Contact from "../pages/commonPages/Contact/Contact";
import HomePage from "../pages/commonPages/Home/HomePage";
import { CommonLayout } from "../layouts/CommonLayout";
import UserProfile from "../pages/user/Profile/UserProfile";
import MyRentals from "../pages/user/MyRentals/MyRentals";
import UserNotification from "../pages/user/Notification/Notification";
import CarDetailPage from "../pages/user/Car-detail/CarDetailPage";
import { DealerLayout } from "../layouts/DealerLayout";
import DealerProfile from "../pages/dealer/Profile/DealerProfile";
import DealerNotification from "../pages/dealer/Notifications/Notification";
import Rentals from "../pages/dealer/ManageRentals/Rentals";
import Inventory from "../pages/dealer/Inventory/Inventory";
import { AdminLayout } from "../layouts/AdminLayout";
import Users from "../pages/admin/Users/Users";
import Dealers from "../pages/admin/Dealers/Dealers";
import AddCar from "../pages/dealer/AddCar/AddCar";
import AllReservations from "../pages/admin/Reservations/AllReservations";


export const router = createBrowserRouter([
   {
    path : 'common',
    element : <CommonLayout />,
    children : [
        {
            path : 'login',
            element : <Login />
        },
        {
            path : 'signup',
            element : <Signup />
        },
    ]
   },
    
    {
      path: "/",
      element: <RootLayout />,

      children : [
        {
            path : '',
            element : <HomePage />
        },
        
        {
            path : 'about',
            element : <AboutPage />
        },
        {
            path : 'carlist',
            element : <CarList />
        },
        {
            path : 'contact',
            element : <Contact />
        },
      ]
    },
    {
        path : 'user',
        element : <UserLayout />,

        children : [
            {
                path : '',
                element : <HomePage />
            },
           
            {
                path : "carlist",
                element: <CarList />
            },
            {
                path : "car-detail/:id",
                element: <CarDetailPage />
            },
            {
                path : "profile",
                element: <UserProfile />
            },
            {
                path : "myrentals",
                element: <MyRentals />
            },
            {
                path : "notification",
                element: <UserNotification />
            },
            {
                path : "contact",
                element: <Contact />
            },

        ]
    },
    {
        path : 'dealer',
        element : <DealerLayout />,

        children : [
            {
                path : '',
                element : <HomePage />
            },
           
            {
                path : "carlist",
                element: <CarList />
            },
            {
                path : "car-detail/:id",
                element: <CarDetailPage />
            },
            {
                path : "profile",
                element: <DealerProfile />
            },
            {
                path : "managerentals",
                element: <Rentals />
            },
            {
                path : "inventory",
                element: <Inventory />
            },
            {
                path : "addcar",
                element: <AddCar />
            },
            {
                path : "notification",
                element: <DealerNotification />
            },
            {
                path : "contact",
                element: <Contact />
            },

        ]
    },
    {
        path : 'admin',
        element : <AdminLayout />,

        children : [
            {
                path : '',
                element : <HomePage />
            },
           
            {
                path : "carlist",
                element: <CarList />
            },
            {
                path : "car-detail/:id",
                element: <CarDetailPage />
            },
            {
                path : "users",
                element: <Users />
            },
            {
                path : "dealers",
                element: <Dealers />
            },
            {
                path : "reservations",
                element: <AllReservations />
            },
           

        ]
    },
   
  ]);