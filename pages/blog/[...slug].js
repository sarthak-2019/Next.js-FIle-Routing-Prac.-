import React from "react";
import { useRouter } from "next/router";
const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>The Blog Posts</div>;
};

export default BlogPostsPage;
