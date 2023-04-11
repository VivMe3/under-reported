import React from "react";
import axios from "axios";

const blog_id = '8627575264260097793';
const api_key = process.env.REACT_APP_API_KEY;
const base_url = 'https://www.googleapis.com/blogger/v3/blogs/';

export const blogPost = (post_id) => {
  const url = `
  ${base_url}${blog_id}/posts/${post_id}?key=${api_key}`;
  return axios.get(url).then((res) => {
    return res.data;
  });
};

// using first comment of a blog for description
export const blogPostDescription = (post_id) => {
  const url = `
  ${base_url}${blog_id}/posts/${post_id}/comments?key=${api_key}`;
  return axios.get(url).then((res) => {
      return res.data;
  });
};

export const blogList = async () => {
  const url = `
  ${base_url}${blog_id}/posts?key=${api_key}`;
  return axios.get(url).then((res) => {
    return res.data.items;
  });
};

export const categoryBlogList = async (category) => {
  const url = `
  ${base_url}${blog_id}/posts?labels=${category}&key=${api_key}`;
  return axios.get(url).then((res) => {
    return res.data.items;
  });
};