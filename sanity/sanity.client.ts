import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "0f1zv1f0",
  dataset: "production",
  apiVersion: "2024-03-22",
  useCdn: false,
};

const client = createClient(config);

export default client;