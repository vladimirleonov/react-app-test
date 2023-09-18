import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { register as registration } from "../redux/slices/authSlice";

const RegisterForm = () => {
    
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange",
        defaultIsValid: true
    });

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(registration(values));
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
                            label="Password"
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
                        <Button type="submit" variant="contained" size="large" sx={{ mt: "2px" }}>
                            Sign up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default RegisterForm;
