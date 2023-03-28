import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react'

const Genres = ({type,selectedGenres,setSelectedGenres,genres,setGenres,setPage}) => {
  
    const fetchGenres = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=7594d3759e2b81758e5b4bcb32be40d3&language=en-US`);
        // console.log(data);
        setGenres(data.genres);
        
      }
      const handleAdd=(genre)=>{
        
            setSelectedGenres([...selectedGenres,genre]);
            setGenres(genres.filter((g)=> g.id!==genre.id));
            setPage(1);
      }
      const handleRemove=(genre)=>{
        
        setSelectedGenres(selectedGenres.filter((g)=> g.id!==genre.id));
        setGenres([...genres,genre]);
        setPage(1);
  }
      useEffect(() => {
        fetchGenres()
        return () => {
          setGenres({});
        }
      }, [])
      
    return (
    <div style={{padding: "6px 0"}}>
        {
        selectedGenres && selectedGenres.map((ge)=> <Chip label={ge.name} style={{margin:2}} clickable size="small" key={ge.id} color={"primary"}onClick={()=>handleRemove(ge)}/>)
        }{
        genres && genres.map((g)=> <Chip label={g.name} style={{margin:2}} clickable size="small" key={g.id} onClick={()=>handleAdd(g)}/>)
        }</div>
  )
}

export default Genres