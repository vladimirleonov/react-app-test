import React from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";

import Container from "@mui/material/Container";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Menu />
            <Container maxWidth="lg">{children}</Container>
        </>
    );
};

export default Layout;
