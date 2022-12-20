import React from 'react';
import BlogItem from './BlogItem';
import '../scss/App.scss';
const BlogList = ({ blogs, content }) => {
    {/* <div className='blogList-wrap'>
    {blogs.map((blog) => (
    <BlogItem blog={blog} content={content}/>
    ))}
</div> */}
  return (
    <div className='blogList-wrap'>
        {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} content={content}/>
        ))}
    </div>
  );
};
export default BlogList;