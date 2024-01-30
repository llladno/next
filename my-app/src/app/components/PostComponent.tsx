import React from 'react';
import Link from "next/link";

const PostComponent = ({post}:any) => {
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href='/'>Назад</Link>
        </div>
    );
};

export default PostComponent;