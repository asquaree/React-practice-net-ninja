import {useState} from 'react';

const Home = () => {

 // let name ='mahima'; 
 const [name,setName]= useState('mahima'); 
 const [age,setage] =useState(25);
 const handleClick=() =>
  {
    console.log(name);
    setName('didi');
    setage(21);
  }
 
    return ( 
        <div className="home">
          <h2>Homepage</h2> 
          <p>{name} is age:{age} </p>
          <button onClick={handleClick}>Click me</button> 
        </div>
     );
}
 
export default Home;