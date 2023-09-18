import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

import { useTheme } from "@mui/material/styles";

const menuItems = [
    {
        text: "Home",
        path: "/"
    },
    {
        text: "About",
        path: "/about"
    },
    {
        text: "Topic1",
        path: "/topic1"
    },
    {
        text: "Topic2",
        path: "/topic2"
    },
    {
        text: "Topic3",
        path: "/topic3"
    },
    {
        text: "Associated blogs",
        path: "/associated-blogs"
    }
];

const Menu = () => {
    const navigate = useNavigate();
    let location = useLocation();

    const theme = useTheme();

    return (
        <Grid>
            <Container
                maxWidth="100%"
                sx={{
                    py: 1,
                    borderBottom: "1px solid #e0e0e0",
                    borderTop: "1px solid #e0e0e0",
                    backgroundColor: "#fff"
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    >
                        <List sx={{ display: "flex", justifyContent: "start" }}>
                            {menuItems.map((menuItem) => (
                                <ListItem
                                    key={menuItem.text}
                                    sx={{
                                        width: "auto",
                                        cursor: "pointer",
                                        color: location.pathname === menuItem.path ? theme.palette.primary.main : ""
                                    }}
                                    onClick={() => {
                                        navigate(menuItem.path);
                                    }}
                                >
                                    {menuItem.text}
                                </ListItem>
                            ))}
                        </List>
                        <Box>
                            <Link
                                sx={{
                                    minWidth: 80,
                                    mr: "30px",
                                    color: "#000",
                                    cursor: "pointer",
                                    textDecoration: "none"
                                }}
                                onClick={() => {
                                    navigate("/RSS");
                                }}
                            >
                                RSS
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </Grid>
    );
};

export default Menu;
