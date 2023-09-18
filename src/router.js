import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout ";
import WithFormLayout from "./components/WithFormLayout";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Layout></Layout>
    },
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        )
    },
    {
        path: "/login",
        element: (
            <Layout>
                <WithFormLayout>
                    <LoginForm />
                </WithFormLayout>
            </Layout>
        )
    },
    {
        path: "/register",
        element: (
            <Layout>
                <WithFormLayout>
                    <RegisterForm />
                </WithFormLayout>
            </Layout>
        )
    }
]);

export default router;
