"use client";
import { createClient } from 'contentful';

const client = createClient({
  space: 'cd9jm2kg5qjr',
  accessToken: 'gFXnAnPE9-Tt7t0ts3BWEBqdhB2HwydUFKbG3CS0-fQ',
});

export async function getBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: 'BlogBox', // Assuming 'blogPost' is the content type ID for your blog posts
    });

    if (entries.items) {
      return entries.items.map((item) => item.fields);
    }
  } catch (error) {
    console.error('Error fetching Contentful data:', error);
    return null;
  }
}