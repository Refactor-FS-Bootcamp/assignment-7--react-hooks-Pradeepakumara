import React, { useState, useEffect } from 'react'
import DisplayAPI from './DisplayAPI';
import '../App.css';

const GetAPI = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://fakestoreapi.com/products";
            const res = await fetch(url);
            const posts = await res.json()
            setPosts(posts)
            // console.log(posts);
        }
        fetchData();
    }, [])

    return (
        <section className="Api-section">
            <div className="Api-container">
                {
                    posts.map(data => <DisplayAPI key={data.id} post={data} />)
                }
            </div>
        </section>
    )
}

export default GetAPI