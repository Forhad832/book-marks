import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookBookmark,faBookOpen } from '@fortawesome/free-solid-svg-icons'



const Blog = (props) => {
    const {author,image,authorImage,text,min} = props.blog;
    const handleClick = (blog)=>{
        props.handleClick(blog)
    }
    return (
        <div className='blog'>
            <img src={image} alt="" />
            <div className='user flex justify-between'>
               <div className='flex '>
                    <img src={authorImage} alt="" />
                    <div>
                    <h4>{author}</h4>
                    <h6>Mar 15 (4 days ago)</h6>
                    </div>
               </div>
               <div >
                <p><small>{min} min read <span onClick={()=>handleClick(props.blog)} className='icon'> <FontAwesomeIcon icon={faBookBookmark} /></span> </small></p>
               </div>
            </div>
            <h2>{text}</h2>
        </div>
    );
};

export default Blog;