import {useState,useEffect} from 'react';

const useFetch = (url) =>
{
    const [data,setData] = useState(null);
    const [isloading,setIsloading] = useState(true);
    const [errstate,setErrstate]=useState(null);

    useEffect( () =>
{
  const abortCont =new AbortController();

  setTimeout( () =>
  {
     fetch(url, {signal : abortCont.signal})
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

        if(err.name ==='AbortError')
        {
          console.log('fetch aborted');
        }
        else{
          console.log(err.message);
          setErrstate(err.message); 
          setIsloading(false);
        }
        
      })
  },1000);
   
 return () => abortCont.abort();
},[]);

return {data,isloading,errstate};
}

export default useFetch;