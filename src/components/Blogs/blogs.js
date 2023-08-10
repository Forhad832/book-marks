import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Bookmark from '../Bookmark/Bookmark';
const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [item,setItem] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])


    const handleClick = blog =>{
        const newBlog = [...item,blog];
        setItem(newBlog);
    }
    let TotalMin = 0;
    for(const mints of item){
        console.log(mints.min);
       const min = parseInt(mints.min);
    
        TotalMin = TotalMin + min;
    }
    return (
        <div className='blogs-container'>
            <div className='blogs-child'>
                {
                    blogs.map(blog => <Blog key={blog.id} handleClick={handleClick} blog={blog}></Blog>)
                }
            </div>
            <div className='blogs bookmark-container'>
            <div>
            <h3>Spent time on read :{TotalMin} minutes </h3>
        </div>
                {
                    item.map(item => <Bookmark blog={item}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Blogs;