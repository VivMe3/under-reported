import React, { useEffect } from 'react';
import BlogItem from './BlogItem';
import '../scss/App.scss';
import { Link } from 'react-router-dom';
import StoryCards from './StoryCards';



const BlogList = ({ blogs, content }) => {
    {/* <div className='blogList-wrap'>
    {blogs.map((blog) => (
    <BlogItem blog={blog} content={content}/>
    ))}
</div> */}

//referrerpolicy="no-referrer"
  const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
  const getFirstImage = (content) => {
    let imgTag = content.match(/<img([\w\W]+?)>/g)[0];
    let newImgTag = imgTag.replace("/>", " referrerpolicy='no-referrer' />");
    console.log(newImgTag);
    return newImgTag;
  }
  let blogList = [];

  useEffect(() => {
    getBlogList(blogs);
  } , []);



  const getBlogList = (blogs) => {
    blogs.map(blog => {
      let tempBlog = {};
      tempBlog.title = blog.title;
      tempBlog.data = blog.published;
      tempBlog.url = `/blog/${blog.id}`;
      // tempBlog.img = getFirstImage(blog.content);
      blogList.push(tempBlog);
    })
    console.log('blogList',blogList);
  }

  return (
    <div className='blogList-wrap'>
       <StoryCards cards={getBlogList} />
        
    </div>
  );
};
export default BlogList;