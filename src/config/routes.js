import AuthGuard from "../components/AuthGuard";
import GuestGuard from "../components/GuestGuard";
// import {Dashboard, SignIn, SignUp, Search, Favorites} from "../pages";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import User from "../pages/User";

const ROUTES = {
  SIGN_UP: "signup",
  SIGN_IN: "signin",
  DASHBOARD: "/",
  DASHBOARDD: "/dashboard",
  SEARCH: "/search",
  FAVORITES: "/favorites",
  USERS: "/user/:id",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: SignUp,
  },
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: SignIn,
  },
  {
    path: ROUTES.DASHBOARDD,
    guard: AuthGuard,
    page: Dashboard,
  },
  {
    path: ROUTES.DASHBOARD,
    guard: AuthGuard,
    page: Dashboard,
  },

  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },

  {
    path: ROUTES.FAVORITES,
    guard: AuthGuard,
    page: Favorites,
  },
  {
    path: ROUTES.USERS,
    guard: AuthGuard,
    page: User,
  },
];

export default ROUTES;
export { ROUTES_CONFIG };
