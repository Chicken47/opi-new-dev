import React from "react";
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "mu27r0iaspzr",
    accessToken: "6OgcNhBJzBd-3UmkCzeffK247dZw5ZLP1w_Lf9rUIao",
    host: "cdn.contentful.com",
  });
  const getData = async () => {
    try {
      const entries = client.getEntries({});
      return entries;
    } catch (error) {
      console.log("contentful error : ", error);
    }
  };
  return { getData };
};

export default useContentful;
