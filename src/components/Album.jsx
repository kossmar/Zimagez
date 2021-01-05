import React, { useState, useEffect } from "react"
import Card from "./Card"
import { fetchData } from "../workers/APIWorker"


function Album() {

    console.log("FUCK")

    const [posts, setPosts] = useState([])


    useEffect(() => {

        const getPosts = async () => {
            const posts = await fetchData()
            setPosts(() => {
                console.log(posts)
                return posts
            })
        }
        getPosts()

    }, [])

    return (

        <div>
            <div className="container-fluid py-3">
                <div className="card-columns">
                    {(posts && posts.length > 0) && posts.map(post => (
                        (post.images ? (post.images[0].animated ?
                            <Card key={post.id} source={"/iu.jpeg"} title={post.title} height={post.cover_height}/>
                            :
                            <Card key={post.id} source={post.images[0].link} title={post.title} height={post.cover_height}/>
                        )
                            :
                            <Card key={post.id} source={"/iu.jpeg"} title={post.title} height={post.cover_height}/>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Album