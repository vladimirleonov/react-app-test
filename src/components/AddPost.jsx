import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller, FormProvider } from "react-hook-form";

import { showPostCreatedToast } from "../utils/toasts";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { connectWebSocket } from "../services/websocket";

import { selectPosts } from "../redux/slices/postsSlice";

const tagsArr = ["tag1", "tag2", "tag3", "tag4"];

const AddPost = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const methods = useForm();

    const posts = useSelector(selectPosts);
    const prevPostsCountRef = useRef(posts.length);

    useEffect(() => {
        if (posts.length === prevPostsCountRef.current + 1) {
            showPostCreatedToast();
        }
        prevPostsCountRef.current = posts.length;
    }, [posts]);

    const onSubmit = (data) => {
        const selectedTags = tagsArr.filter((tag) => data.tags.includes(tag));
        const currentDate = format(new Date(), "dd.MM.yy");

        const newPost = {
            id: uuidv4(),
            type: "add",
            title: data.title,
            body: data.text,
            tags: selectedTags,
            rate: data.rating,
            date: currentDate
        };

        dispatch(connectWebSocket(newPost));

        onClose();
        methods.reset();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle color={"primary"}>Add new post</DialogTitle>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <DialogContent>
                        <Controller
                            name="title"
                            control={methods.control}
                            rules={{ required: true }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    placeholder="Заголовок статьи..."
                                    fullWidth
                                    style={{ marginBottom: "10px" }}
                                    error={Boolean(methods.formState.errors.title)}
                                    helperText={
                                        methods.formState.errors.title ? methods.formState.errors.title.message : ""
                                    }
                                />
                            )}
                        />
                        <Controller
                            name="text"
                            control={methods.control}
                            rules={{ required: true }}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                                <TextareaAutosize
                                    {...field}
                                    placeholder="Текст статьи..."
                                    minRows={8}
                                    style={{
                                        width: "100%",
                                        marginBottom: "10px",
                                        padding: "8px",
                                        fontSize: "14px",
                                        border: fieldState.error ? "1px solid red" : "1px solid #ced4da"
                                    }}
                                />
                            )}
                        />
                        <List dense>
                            {tagsArr.map((value) => (
                                <ListItem key={value} disablePadding>
                                    <label>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Controller
                                                name="tags"
                                                control={methods.control}
                                                defaultValue={[]}
                                                render={({ field }) => (
                                                    <Checkbox
                                                        edge="end"
                                                        checked={field.value.includes(value)}
                                                        onChange={(e) => {
                                                            const newValue = e.target.checked
                                                                ? [...field.value, value]
                                                                : field.value.filter((tag) => tag !== value);
                                                            field.onChange(newValue);
                                                        }}
                                                        style={{ pointerEvents: "none" }}
                                                    />
                                                )}
                                            />
                                            <ListItemText
                                                primary={value}
                                                primaryTypographyProps={{ variant: "subtitle1" }}
                                                style={{
                                                    cursor: "pointer",
                                                    marginLeft: "5px"
                                                }}
                                            />
                                        </div>
                                    </label>
                                </ListItem>
                            ))}
                        </List>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                            <Typography
                                component="legend"
                                variant="subtitle1"
                                style={{ minWidth: 40, paddingRight: "12px" }}
                            >
                                Rate this article
                            </Typography>
                            <Controller
                                name="rating"
                                control={methods.control}
                                defaultValue={0}
                                render={({ field }) => (
                                    <Rating
                                        name={field.name}
                                        size="medium"
                                        value={field.value}
                                        onChange={(event, newValue) => field.onChange(newValue)}
                                    />
                                )}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit">
                            Add post
                        </Button>
                    </DialogActions>
                </form>
            </FormProvider>
        </Dialog>
    );
};

export default AddPost;
