import { useLoaderData } from 'react-router-dom';
import BlogCard from '../components/BlogCard/BlogCard';

const Blogs = () => {

    const blogs = useLoaderData()
   
    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
                }
               
            </div>
           
        </div>

    );
};

export default Blogs;