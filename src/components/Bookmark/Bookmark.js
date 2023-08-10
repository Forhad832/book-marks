import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    const {text,min} = props.blog;
    return (
        <div>
            
        <div className='text'>
            <h4>{text}</h4>
        </div>
        </div>
    );
};

export default Bookmark;