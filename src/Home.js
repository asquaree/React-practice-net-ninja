import {useState,useEffect} from 'react';
import Bloglist from './Bloglist';


const Home = () => {
const [blogs,setBlogs] = useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
]);

const handledelete = (id) =>
{
  const newblogs=blogs.filter(blogs => blogs.id!==id);
  setBlogs(newblogs);

}

useEffect( () =>
{
  console.log('use effect run');
})

    return ( 
        <div className="home">
         <Bloglist blogs={blogs} title="All blogs" handledelete={handledelete}></Bloglist>
        </div>
     );
}
 
export default Home;