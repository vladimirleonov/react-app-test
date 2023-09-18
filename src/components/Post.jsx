import React from "react";

import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Post = ({ post }) => {
    return (
        <>
            <Typography variant="h5" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                {post.body}
            </Typography>
            <CardMedia
                component="img"
                sx={{ height: 200, width: 300, m: "0 auto" }}
                image="https://bogatyr.club/uploads/posts/2023-01/thumbs/1675187043_bogatyr-club-p-pastelnie-tona-odnotonnie-fon-krasivo-2.jpg"
                alt="Изображение статьи"
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <Box sx={{ display: "flex", marginTop: "15px" }}>
                    <Typography variant="caption" sx={{ minWidth: 40 }}>
                        Tags:
                    </Typography>
                    {post.tags &&
                        post.tags.map((tag, index) => (
                            <Typography key={index} variant="caption" sx={{ minWidth: 36 }}>
                                {tag}
                            </Typography>
                        ))}
                </Box>
                <Box sx={{ display: "flex", marginTop: "15px" }}>
                    <Typography component="legend" variant="caption" sx={{ minWidth: 40, paddingRight: "12px" }}>
                        Rate this article
                    </Typography>
                    <Rating name="rating" size="small" value={post.rate} />
                </Box>
            </Box>
        </>
    );
};

export default Post;
