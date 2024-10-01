import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import RestarauntDetails from "./pages/RestarauntDetails";
import Cart from "./pages/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/AddMenu";
import Orders from "./admin/Orders";
import Success from "./pages/Success";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HeroSection />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/search/:text',
        element: <SearchPage />
      },
      {
        path: '/restaurant/:id',
        element: <RestarauntDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/status',
        element: <Success />
      },

      //admin pages
      {
        path: '/admin/restaurant',
        element: <Restaurant />
      },
      {
        path: '/admin/menu',
        element: <AddMenu />
      },
      {
        path: '/admin/orders',
        element: <Orders />
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
