
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

  const {data : blogs,isloading,errstate}= useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
          {errstate && <div>{errstate}</div>}
          {isloading && <div>Loading...</div>}
          
      {blogs && <Bloglist blogs={blogs} title="All blogs" ></Bloglist>}
        </div>
     );
}
 
export default Home;