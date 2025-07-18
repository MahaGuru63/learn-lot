// src/lib/api.ts
const POST_GRAPHQL_FIELDS = `
  __typename
  sys {
    id
  }
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    about {
      json
    }
    picture {
      url
    }
  }
  seoMetadata {
    seoTitle
    seoDescription
    socialImage {
      url
    }
    noIndex
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
          }`
        },
        body: JSON.stringify({ query }),
        next: { tags: ['posts'] }
      }
    );

    if (!response.ok) {
      // This will catch any responses that aren't in the 2xx range
      throw new Error(`Network response was not ok (status: ${response.status}, statusText: ${response.statusText})`);
    }

    const json = await response.json();
    if (json.errors) {
      // This will catch any errors returned by Contentful
      console.error('GraphQL error:', json.errors);
      throw new Error(`Contentful GraphQL API error: ${JSON.stringify(json.errors)}`);
    }

    return json;
  } catch (error) {
    // This catches any network error or error thrown from the above blocks
    console.error('Error fetching data:', error);
    throw new Error(`Error fetching data: ${error}`);
  }
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${isDraftMode ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug: string, preview: boolean): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
        preview ? 'true' : 'false'
      }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries)
  };
}
