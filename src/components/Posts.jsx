import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Post from "./Post";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { selectPosts } from "../redux/slices/postsSlice";

const Posts = () => {
    const postsData = useSelector(selectPosts);

    const posts = useMemo(() => {
        if (postsData) {
            return postsData.map((post, i) => (
                <Card key={i} sx={{ display: "flex", flexDirection: "column", my: 2 }}>
                    <CardContent>
                        <Post post={post} />
                    </CardContent>
                </Card>
            ));
        }
        return null;
    }, [postsData]);

    return <>{posts !== null && posts.length ? posts : null}</>;
};

export default Posts;
