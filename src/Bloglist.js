

const Bloglist = ({blogs,title, handledelete}) => {
   // const blogs =props.blogs;
    //const title =props.title;
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
             {
            blogs.map( (blog) => 
             (
              <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>writen by {blog.author}</p>
                <button onClick={() => handledelete(blog.id)}>delete blog</button>
              </div>
            )
            )
          }
        </div>
    );
}
 
export default Bloglist;