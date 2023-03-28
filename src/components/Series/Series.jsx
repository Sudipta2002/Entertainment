// import React from 'react'

// const Series = () => {
//   return (
//     <div>Series</div>
//   )
// }

// export default Series

 import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react';
import CustomPagination from '../Pagination/CustomPagination.jsx';

import SingleContent from '../SingleContent/SingleContent.jsx'
import Genres from '../Genres/Genres.jsx';
import useGenre from '../../Hooks/UseGenre.jsx';
const Series = () => {
  const [movie, setMovie] = useState([]);
    const [page,setPage]=useState(1);
    const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);
    const fetchTrending = async()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=7594d3759e2b81758e5b4bcb32be40d3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
      // console.log(data);
      setMovie(data.results);
      setNumOfPages(data.total_pages);
    }
  useEffect(() => {
      fetchTrending();        
  }, [page,genreforURL]);
  return (
    <div>
      <span className="pageTitle">Discover Series</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {movie &&
          movie.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}

    </div>
  )
}

export default Series
