import { useParams } from "react-router";
import useFetch from './useFetch';
const Blogdetails = () => 
{
    const {id} =useParams();
    const {data :blog,errState,isloading} = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-details">
            <h2>Blog detail - { id}</h2>
            {isloading && <div>Loading ...</div>}
            {errState && <div >{errState}</div>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div >{blog.body}</div>
                    </article>
                )
            }
        </div>
      );
}
 
export default Blogdetails;