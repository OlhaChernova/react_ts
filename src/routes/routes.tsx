import Home from "pages/Home/Home";
import type { RoutePage } from "./types";
import Clients from "pages/Clients/Clients";
import Adidas from "pages/Clients/components/Adidas/Adidas";
import Nike from "pages/Clients/components/Nike/Nike";
import Puma from "pages/Clients/components/Puma/Puma";
import User from "pages/Users/components/User/User";
import Users from "pages/Users/Users";
import About from "pages/About/About";
import Lesson14 from "lessons/Lesson14/Lesson14";


export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/users", element: <Users /> },
  { path: "/users/user", element: <User /> },
  { path: "/clients", element: <Clients /> },
  { path: "/clients/adidas", element: <Adidas /> },
  { path: "/clients/nike", element: <Nike /> },
  { path: "/clients/puma", element: <Puma /> },
  { path: "/lesson14", element: <Lesson14 /> },
  { path: "*", element: "Page not found" },
];
