import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {cover_image, title, description, published_at, id} = blog
    return (
        <div>
            <Link to='/blog/${id}' href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs text-gray-400">{published_at}</span>
                        <p>{description}</p>
                    </div>
                </Link>
        </div>
    );
};

export default BlogCard;