import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import LastPosts from "../components/LastPosts";
import TwitterPosts from "../components/TwitterPosts";
import Posts from "../components/Posts";

const Home = () => {
    return (
        <Container
            maxWidth="100%"
            sx={{ py: 1, pr: 0, backgroundColor: "#fff" }}
        >
            <Grid container direction="row" spacing={2}>
                <Grid item xs={8}>
                    <Posts />
                </Grid>
                <Grid item xs={4}>
                    <LastPosts />
                    <TwitterPosts />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
