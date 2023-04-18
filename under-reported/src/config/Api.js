import axios from "axios";

const blog_id = process.env.REACT_APP_BLOG_ID;
const api_key = process.env.REACT_APP_API_KEY;
const base_url = 'https://www.googleapis.com/blogger/v3/blogs/';

// get individual Blogger post by post ID
export const blogPost = (post_id) => {
  const url = `
  ${base_url}${blog_id}/posts/${post_id}?key=${api_key}`;
  return axios.get(url).then((res) => {
    return res.data;
  });
};

// get first comment of a Blogger Post - used for description
export const blogPostDescription = (post_id) => {
  const url = `
  ${base_url}${blog_id}/posts/${post_id}/comments?key=${api_key}`;
  return axios.get(url).then((res) => {
      return res.data;
  });
};

// get list of all Blogger posts
export const blogList = async () => {
  const url = `
  ${base_url}${blog_id}/posts?key=${api_key}`;
  return axios.get(url).then((res) => {
    return res.data.items;
  });
};

// get list of all Blogger posts with desired label/category
export const categoryBlogList = async (category) => {
  const url = `
  ${base_url}${blog_id}/posts?labels=${category}&key=${api_key}`;
  return axios.get(url).then((res) => {
    return res.data.items;
  });
};