import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBlogDe from "../SingleBlogDe";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id == id);

 const handleBookmark = () => {
    console.log("click")
 }


  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="card w-full bg-base-100 shadow-none">
        <figure>
          <img
            src={blog.cover_image}
            alt="Ses"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.description} fff</p>
          <div className="card-actions justify-end">
            <button onClick={handleBookmark} className="btn text-white btn-primary">book Mark</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
