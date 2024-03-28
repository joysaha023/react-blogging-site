import React from "react";
import { Link } from "react-router-dom";
import errImage from "../../assets/404.jpg";

const BlogCard = ({ blog }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <div>
      
      <Link to={`/blog/${id}`}  className="card h-full w-full bg-base-100 shadow-xl">
        <figure className="h-full m-6">
          <img
            src={cover_image || errImage}
            alt="Shoes"
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
