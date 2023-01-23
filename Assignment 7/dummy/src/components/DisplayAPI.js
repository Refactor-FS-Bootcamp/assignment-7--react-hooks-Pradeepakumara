import React from 'react'
import '../App.css';

const DisplayAPI = ({ post }) => {
  return (
    <article className="Api-item">
      <img src={post.image} alt="img1" />
      <h1>{post.title}</h1>
      <h3>&#x24; {post.price}</h3>
      <p>{post.description}</p>
      <h4>{post.category}</h4>
    </article>
  )
}

export default DisplayAPI