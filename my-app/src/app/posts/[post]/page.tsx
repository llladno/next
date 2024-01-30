import React from 'react';
import PostComponent from "@/app/components/PostComponent";
async function fetchData(params:any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
    const result = await res.json();
    return result;
}

const Post = async ({params}:any) => {
    const res = await fetchData(params)
    console.log(res)
    return (
        <div>
            <PostComponent post={res}></PostComponent>
        </div>
    );
};

export default Post;