import { useParams } from "react-router";

const Blogdetails = () => 
{
    const {id} =useParams();
    return (
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
        </div>
      );
}
 
export default Blogdetails;