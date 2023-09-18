import React, { useState, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { selectPosts } from "../redux/slices/postsSlice";

const LastPosts = () => {
    const [expandedPosts, setExpandedPosts] = useState([]);
    const postsData = useSelector(selectPosts);

    const expandPost = useCallback((postId) => {
        if (expandedPosts.includes(postId)) {
            setExpandedPosts(expandedPosts.filter((id) => id !== postId));
        } else {
            setExpandedPosts([...expandedPosts, postId]);
        }
    }, [expandedPosts]);
    
    const posts = useMemo(() => {
        if (postsData) {
            return postsData.slice(0, 2).map((post, i) => (
                <Box key={i} sx={{ paddingBottom: "20px" }}>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        {expandedPosts.includes(post.id)
                            ? post.body
                            : post.body.split(" ").slice(0, 46).join(" ") + "..."}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ textAlign: "right", textDecoration: "underline", cursor: "pointer" }}
                        onClick={() => expandPost(post.id)} // Используйте expandPost
                        gutterBottom
                    >
                        {expandedPosts.includes(post.id) ? "Less" : "More"}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "right" }} gutterBottom>
                        {post.date}
                    </Typography>
                </Box>
            ));
        }
    }, [postsData, expandedPosts, expandPost]);

    return (
        <Box sx={{ padding: "10px", my: 2 }}>
            <Typography variant="h5" gutterBottom>
                Last posts
            </Typography>
            <Paper variant="outlined" sx={{ p: 1.5 }}>
                {posts && posts.length ? posts : null}
            </Paper>
        </Box>
    );
};

export default LastPosts;
