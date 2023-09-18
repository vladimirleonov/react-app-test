import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { showAuthenticationSuccessToast } from "../utils/toasts";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import AddPost from "./AddPost";
import DeletePosts from "./DeletePosts";
import ErrorForm from "./ErrorForm";

import { logout, selectIsAuth, selectUserLogin, selectAuthError } from "../redux/slices/authSlice";
import { selectPostsError } from "../redux/slices/postsSlice";

const Header = () => {
    const [openAddPost, setAddPostOpen] = useState(false);
    const [openDeletePosts, setDeletePostsOpen] = useState(false);
    const [errorFormOpen, setErrorFormOpen] = useState(false);

    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectUserLogin);
    const authError = useSelector(selectAuthError);
    const postsError = useSelector(selectPostsError);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (postsError || authError) {
            setErrorFormOpen(true);
        }
    }, [postsError, authError]);

    useEffect(() => {
        if (isAuth) {
            showAuthenticationSuccessToast();
        }
    }, [isAuth]);

    const onClickLogout = () => {
        if (window.confirm("Do you really want to log out?")) {
            dispatch(logout());
        }
    };

    const handleFormToggle = (formName, isOpen) => {
        switch (formName) {
            case "addPost":
                setAddPostOpen(isOpen);
                break;
            case "deletePosts":
                setDeletePostsOpen(isOpen);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Container maxWidth="100%" sx={{ py: 1, pr: 0, backgroundColor: "#fff" }}>
                <Container maxWidth="lg">
                    <Grid container direction="row" spacing={1} alignItems={"flex-end"}>
                        <Grid item xs={0.6}>
                            <ImportantDevicesOutlinedIcon
                                cursor="pointer"
                                color={"primary"}
                                fontSize={"large"}
                                onClick={() => {
                                    navigate("/");
                                }}
                            />
                        </Grid>
                        <Grid item xs={5.9} justifyContent="center" alignItems="center">
                            <Typography sx={{ mb: "7px" }}>News</Typography>
                        </Grid>
                        <Grid container xs={5.5} sx={{ height: "100%" }} justifyContent="flex-end">
                            {isAuth ? (
                                <>
                                    {login && (
                                        <Typography
                                            sx={{
                                                display: "inline-block",
                                                mx: "6px",
                                                px: "15px",
                                                py: "5px"
                                            }}
                                        >
                                            {login}
                                        </Typography>
                                    )}
                                    <Button
                                        variant="contained"
                                        sx={{ mx: "6px" }}
                                        onClick={() => handleFormToggle("addPost", true)}
                                    >
                                        Add post
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{ mx: "6px" }}
                                        onClick={() => handleFormToggle("deletePosts", true)}
                                    >
                                        Delete post
                                    </Button>
                                    <Button variant="outlined" sx={{ mx: "6px" }} onClick={onClickLogout}>
                                        Log out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{ mx: "6px" }}
                                        onClick={() => {
                                            navigate("/login");
                                        }}
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{ mx: "6px" }}
                                        onClick={() => {
                                            navigate("/register");
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <AddPost open={openAddPost} onClose={() => handleFormToggle("addPost", false)} />
            <DeletePosts open={openDeletePosts} onClose={() => handleFormToggle("deletePosts", false)} />
            {(postsError || authError) && (
                <ErrorForm
                    open={errorFormOpen}
                    onClose={() => setErrorFormOpen(false)}
                    error={postsError || authError}
                />
            )}
        </>
    );
};

export default Header;
