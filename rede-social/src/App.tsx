import './styles/globo.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Friends } from './pages/Friends';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "singup",
    element: <SignUp />,
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "friends",
    element: <Friends/>
  }
]);


export function App() {

  return <RouterProvider router={router} />

}







