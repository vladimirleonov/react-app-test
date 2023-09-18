import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { selectIsAuth } from "../redux/slices/authSlice";

const WithFormLayout = React.memo(({ children }) => {
    const isAuth = useSelector(selectIsAuth);

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <Container sx={{ m: "0 auto", height: "100%" }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
});

export default WithFormLayout;
