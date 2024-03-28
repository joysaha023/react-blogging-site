import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogs = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto mt-10">
      {
        blogs.map((blog) =>  )
      }
      
    </div>
  );
};

export default BlogDetails;
