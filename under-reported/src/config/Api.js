import React from "react";
import axios from "axios";

const blog_id = '7468781480923909675';
const api_key = process.env.REACT_APP_API_KEY;
const base_url = 'https://www.googleapis.com/blogger/v3/blogs/';

export const blogList = async () => {
  const url = `
  ${base_url}${blog_id}/posts?key=${api_key}`;
  return axios.get(url).then((res) => {
    console.log('res', res.data.items);
    return res.data.items;
  });
};

export const businessList = async () => {
  const url = `
  ${base_url}${blog_id}/posts?labels=business&key=${api_key}`;
  return axios.get(url).then((res) => {
    console.log('res', res.data.items);
    return res.data.items;
  });
};