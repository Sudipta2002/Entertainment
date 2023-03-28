import axios from 'axios';
import React,{useEffect,useState} from 'react';
import CustomPagination from '../Pagination/CustomPagination.jsx';

import SingleContent from '../SingleContent/SingleContent.jsx'
import './Trending.css';
const Trending = () => {
    const [movie, setMovie] = useState([]);
    const [page,setPage]=useState(1);
    const fetchTrending = async()=>{
        const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=7594d3759e2b81758e5b4bcb32be40d3'+`&page=${page}`);
        //console.log(data);
        setMovie(data.results);
    }
    useEffect(() => {
        fetchTrending();        
    }, [page])
    
  return (
      <div>
        <span className="pageTitle">TRENDING</span>
    <div className="trending">
        {movie &&
            movie.map((c) => (
              <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              />
              ))}
      </div>
      <CustomPagination setPage={setPage}/>
      </div>
  )
}

export default Trending