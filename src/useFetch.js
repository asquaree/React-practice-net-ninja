import {useState,useEffect} from 'react';

const useFetch = (url) =>
{
    const [data,setData] = useState(null);
    const [isloading,setIsloading] = useState(true);
    const [errstate,setErrstate]=useState(null);

    useEffect( () =>
{

  setTimeout( () =>
  {
     fetch(url)
      .then(res =>
      {
        console.log(res);
        if(!res.ok)
        {
          throw Error('could not fetch data for that resource');
        }
        return res.json();
      })
      .then(data =>
      {
        console.log(data);
        setData(data);
        setIsloading(false);
        setErrstate(false);
      })
      .catch( err =>{
        console.log(err.message);
        setErrstate(err.message); 
        setIsloading(false);
      })
  },1000);
   
 
},[]);

return {data,isloading,errstate};
}

export default useFetch;