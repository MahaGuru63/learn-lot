"use client";
import axios from 'axios';

const client = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export const fetchEntries = async (contentType) => {
  try {
    const response = await client.get(`/entries?content_type=${contentType}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return [];
  }
};