import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout ";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Layout></Layout>,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Auth />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Auth />
      </Layout>
    ),
  },
]);

export default router;
