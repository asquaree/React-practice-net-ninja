import {useState,useEffect} from 'react';
import Bloglist from './Bloglist';


const Home = () => {
const [blogs,setBlogs] = useState(null);

const [name,setName]=useState('mario');

/*const handledelete = (id) =>
{
  const newblogs=blogs.filter(blogs => blogs.id!==id);
  setBlogs(newblogs);

}*/


useEffect( () =>
{
  fetch('http://localhost:8000/blogs')
  .then(res =>
  {
    return res.json();
  })
  .then(Data =>
    {
      console.log(Data);
      setBlogs(Data);
    })
   
 
},[])

    return ( 
        <div className="home">
      {blogs && <Bloglist blogs={blogs} title="All blogs" /*handledelete={handledelete}*/></Bloglist>}
        <p>home: {name}</p>
        </div>
     );
}
 
export default Home;