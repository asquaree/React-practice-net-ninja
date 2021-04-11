import {useState,useEffect} from 'react';
import Bloglist from './Bloglist';


const Home = () => {
const [blogs,setBlogs] = useState(null);
const [isloading,setIsloading] = useState(true);

const [name,setName]=useState('mario');
const [errstate,setErrstate]=useState(null);

/*const handledelete = (id) =>
{
  const newblogs=blogs.filter(blogs => blogs.id!==id);
  setBlogs(newblogs);

}*/


useEffect( () =>
{

  setTimeout( () =>
  {
     fetch('http://localhost:8000/blogs')
      .then(res =>
      {
        console.log(res);
        if(!res.ok)
        {
          throw Error('could not fetch data for that resource');
        }
        return res.json();
      })
      .then(Data =>
      {
        console.log(Data);
        setBlogs(Data);
        setIsloading(false);
        setErrstate(false);
      })
      .catch( err =>{
        console.log(err.message);
        setErrstate(err.message); 
        setIsloading(false);
      })
  },1000);
   
 
},[])

    return ( 
        <div className="home">
          {errstate && <div>{errstate}</div>}
          {isloading && <div>Loading...</div>}
          
      {blogs && <Bloglist blogs={blogs} title="All blogs" /*handledelete={handledelete}*/></Bloglist>}
        <p>home: {name}</p>
        </div>
     );
}
 
export default Home;