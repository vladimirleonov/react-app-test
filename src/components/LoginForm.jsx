import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { login } from "../redux/slices/authSlice";

const LoginFrom = () => {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange"
    });

    const onSubmit = (values) => {
        dispatch(login(values));
    };

    return (
        <Paper sx={{ padding: "46px 36px", width: "38%", margin: "80px auto 0 auto" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ marginBottom: "8px" }}
                            label="Email"
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
                            sx={{ marginBottom: "8px" }}
                            label="Пароль"
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
                            Log in
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/register" sx={{ textDecoration: "none" }}>
                            <Typography sx={{ mt: "10px" }} color={"primary"}>
                                {"Don't have an account? Sign Up"}
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default LoginFrom;
