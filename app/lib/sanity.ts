import { createClient } from "next-sanity";

const projectId = "i7c4qbsl";
const dataset = "production";
const apiVersion = "2023-07-19";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
