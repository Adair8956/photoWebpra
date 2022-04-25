import React,{useState ,useEffect} from 'react';
import Search from "../components/Search";
import Pictures from '../components/Pictures';


const Homepage = () => {
    const [input,setInput] = useState("");

    let [data,setData] = useState(null);
    let [page,setPage] = useState(1);
    
    const [current,setCurrent] = useState("");
    const auth = "563492ad6f917000010000014a84c57632c64c86b19bd36d729e70a9";
    const intialURL ="https://api.pexels.com/v1/curated?page=1&per_page=15"
    const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15&page=1`

    const search = async (url)=>{
      setPage(2);
      const dataFetch = await fetch(url,{
        method:"GET",
        headers:{
          Accept:"applicatiob/json",
          Authorization:auth
        },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);

    

  }

  const morepicture = async() =>{
    
    let newURL;
    
    if(current === ""){
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    }else{
      newURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15&page=${page}`;
    }
    setPage(page+1);
    const dataFetch = await fetch(newURL,{
      method:"GET",
      headers:{
        Accept:"applicatiob/json",
        Authorization:auth
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
    
  }
  useEffect(()=>{
    search(intialURL);
  }, []);

  useEffect(()=>{
    if(current === ""){
      search(intialURL);
    }else{
      search(searchURL);
    }
  },[current]);
    
    
    return (
    <div style={{minHeight:"100vh"}}>
        
        <Search 
        search ={()=>{
          setCurrent(input);
          }} setInput ={setInput}/>
        <div className="pictures">
          {
            data && data.map(d => {
              return <Pictures data ={d}/>
            })
          }
        </div>
        <div className="morepic">
          <button onClick={morepicture}>LoadMore</button>
        </div>
       
    </div>
  )
}

export default Homepage