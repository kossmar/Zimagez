import React, { useState, useEffect } from "react"
import Card from "./Card"


function DataFetching() {

    console.log("FUCK")

    const [posts, setPosts] = useState([])

    const url = "https://api.imgur.com/3/gallery/hot"

    useEffect(() => {
        async function fetchData() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Client-ID 887969259c856a0");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(url, requestOptions);
            const body = await response.json()
            const posts = body.data
            // console.log(posts[0].images[0].link)
            console.log(posts)
            // const { id } = posts[0]
            // console.log(id)
            setPosts(posts)
        }
        fetchData();
    }, [])

    return (

        <div>
            <div className="container-fluid py-3">
                <div className="row">
                    {(posts && posts.length > 0) && posts.map(post => (
                        (post.images ? (post.images[0].animated ?
                            <Card key={post.id} source={"/iu.jpeg"} />
                            :
                            <Card key={post.id} source={post.images[0].link} />
                        )
                            :
                            <Card key={post.id} source={"/iu.jpeg"} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DataFetching