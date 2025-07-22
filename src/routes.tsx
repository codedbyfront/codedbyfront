// import type { Routes } from "./types/Routes";
import Home from "./pages/Home/home.tsx";
import Panel from "./pages/adminPanel/Panel/Panel.tsx";
import IndexPanel from "./pages/adminPanel/main.tsx";
import AddProduct from "./pages/adminPanel/AddProduct/AddProduct.tsx";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/admin-panel/*",
    element: <IndexPanel />,
    children: [
      { path: "", element: <Panel /> },
      { path: "add-product", element: <AddProduct /> },
    ],
  },
];

export default routes;
