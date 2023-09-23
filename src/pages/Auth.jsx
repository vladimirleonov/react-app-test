import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';

import { login } from "../redux/slices/authSlice";
import { register as registration, selectIsAuth } from "../redux/slices/authSlice";

const Auth = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const isLogin = location.pathname === '/login';
    const isAuth = useSelector(selectIsAuth);

    useEffect(() => {
        if(isAuth) {
            navigate('/');
        }
    }, [isAuth])

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange"
    });

    const resetForm = () => {
        reset({
            email: "",
            password: ""
        });
    };
    useEffect(() => {
        resetForm();
    }, [location.pathname]);

    const onSubmit = async (values) => {
        if(isLogin) {
            await dispatch(login(values));
        } else {
            await dispatch(registration(values));
        }
    };

    return (
        <Container sx={{ m: "0 auto", height: "100%" }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Paper sx={{ padding: "46px 36px", width: "38%", margin: "80px auto 0 auto" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        sx={{ marginBottom: "8px" }}
                                        label="Email"
                                        variant="outlined"
                                        error={Boolean(errors.email?.message)}
                                        helperText={errors.email?.message}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        sx={{
                                            marginBottom: "8px",
                                        }}
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        error={Boolean(errors.password?.message)}
                                        helperText={errors.password?.message}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 4,
                                                message: "Min length is 4"
                                            }
                                        })}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" size="large" sx={{ mt: "2px" }} fullWidth>
                                        { isLogin ? 'Log in' : 'Sign up' }
                                    </Button>
                                </Grid>
                                {
                                    isLogin && 
                                    <Grid item xs={12}>
                                        <Link to="/register" sx={{ textDecoration: "none" }}>
                                            <Typography sx={{ mt: "10px" }} color={"primary"}>
                                                {"Don't have an account? Sign Up"}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                }
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Auth;

