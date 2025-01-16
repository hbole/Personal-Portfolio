import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "nsjgtgmn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,// Use CDN for faster responses
  token: import.meta.env.VITE_SANITY_API_TOKEN
});

export default sanityClient;