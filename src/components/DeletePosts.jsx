import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showPostDeletedToast } from "../utils/toasts";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListItemIcon from "@mui/material/ListItemIcon";

import { connectWebSocket } from "../services/websocket";
import { selectPosts } from "../redux/slices/postsSlice";

const DeletePosts = ({ open, onClose }) => {
    const posts = useSelector(selectPosts);

    const [selectedPosts, setSelectedPosts] = useState([]);
    const prevPostsCountRef = useRef(posts.length);

    const dispatch = useDispatch();

    useEffect(() => {
        if (posts.length < prevPostsCountRef.current && prevPostsCountRef.current - posts.length >= 1) {
            showPostDeletedToast();
        }
        prevPostsCountRef.current = posts.length;
    }, [posts]);

    const handleToggleSelect = (postId) => {
        if (selectedPosts.includes(postId)) {
            setSelectedPosts(selectedPosts.filter((id) => id !== postId));
        } else {
            setSelectedPosts([...selectedPosts, postId]);
        }
    };

    const handleDeleteSelected = () => {
        const deleteData = selectedPosts.map((postId) => postId).join(",");
        const requestData = {
            type: "del",
            id: deleteData
        };

        dispatch(connectWebSocket(requestData));

        setSelectedPosts([]);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle color="primary">Delete Post</DialogTitle>
            <DialogContent>
                <List>
                    {posts &&
                        posts.map((post) => (
                            <ListItem key={post.id} button>
                                <ListItemIcon onClick={() => handleToggleSelect(post.id)}>
                                    <Checkbox
                                        edge="start"
                                        checked={selectedPosts.includes(post.id)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText onClick={() => handleToggleSelect(post.id)} primary={post.title} />
                            </ListItem>
                        ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleDeleteSelected}
                    variant="contained"
                    color="primary"
                    disabled={selectedPosts.length === 0}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeletePosts;
