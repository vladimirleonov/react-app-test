import React, {useMemo} from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { selectPosts } from "../redux/slices/postsSlice";

const TwitterPosts = () => {

    const postsData = useSelector(selectPosts);

    const posts = useMemo(() => {
        if (postsData) {
            return postsData.slice(0, 2).map((post, i) => (
                <Box key={i} sx={{ paddingBottom: "20px" }}>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        {post.body.length > 8 ? post.body.split(" ").slice(0, 8).join(" ") + "..." : post.body}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "right" }} gutterBottom>
                        {post.date}
                    </Typography>
                </Box>
            ));
        }
    }, [postsData]);

    return (
        <Box sx={{ padding: "10px", my: 2 }}>
            <Typography variant="h5" gutterBottom>
                Me on Twitter
            </Typography>
            <Paper variant="outlined" sx={{ p: 1.5 }}>
                {posts && posts.length ? posts : null}
            </Paper>
        </Box>
    );
};

export default TwitterPosts;
