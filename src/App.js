
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title='Welcomr to the new blog';
  const likes=50;
  const link="http://www.google.com";
  
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="content">
       <Home></Home> 
        <p>{'Aakash: name '}</p>
       

        <a href={link}>Google site</a>
      </div> 
    </div>
  );
}

export default App;
