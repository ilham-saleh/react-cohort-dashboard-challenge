import { useEffect, useState } from "react"
import Post from "../Post"
import PostForm from "../PostForm"
import {Link} from 'react-router-dom'

export default function Posts(props) {
    const {posts, getPosts, getComments, user, post} = props

    // const limitedPosts = posts.slice(0, 3)

    return (
        <div className="main">
             <PostForm getPosts={getPosts} user={user} post={post}/>
            <div className="posts-container">
                {posts.map((post, index) => (
                        <ul>
                            <Post post={post} key={index} getComments={getComments} user={user}/>
                        </ul>
                ))}
            </div>
        </div>
    )
}