import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "nsjgtgmn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,// Use CDN for faster responses
  token: "skYQgD37ROLOef7Y0vSb51IHKsvqptgNH7q5i86s09vZ2hxlYdiAHFOr1d4RtPaP9O3S30RCV4a5kXMw3QyXNfeeFQ6ijvEIk4BPebwUVPHCw4ufjd47PoTVbyU2hrtyQxUbwSgMii02TQTx0GMYEUW1TQM1ufG9iGxudMv5bnD1N7tvmWEw"
});

export default sanityClient;