import React from "react";
import "./index.css";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";

function SearchMovie() {
  const [typing, setTyping] = useState("");
  const [movieData,setMovieData]=useState([]);

  useEffect(()=>{
    getMovies();
    console.log(movieData);
  } ,[typing])

  async function getMovies(){
    const response=await fetch('https://raw.githubusercontent.com/beyzauyanksoy/movie-app/main/src/data/films.json');
    const data=await response.json();
    const getData=data.results.filter(item=>item.title.toLowerCase().includes(typing.toLowerCase())).map(i=>{
      return {
        id: i.episode_id,
        title:i.title,
        img:i.img,
        date:i.date,
        point:i.point,
      }
    })
    setMovieData(getData);
  }


  function typingstart(e) {
    const typingTimeout=setTimeout(()=>{
      setTyping(e.target.value);
    },500)
    return()=>{
      clearTimeout(typingTimeout);
    }
    
  }

  return (
    <div>
      <div className="searchBar">
        <div className="mainSearchBar">
          <h2>Film Ara</h2>
          <input
            onChange={typingstart}
            type="text"
            placeholder="Search..."
          ></input>
          
         
        </div>
      </div>
      <div className="mainMovie">
        <div className="mainBoxs">
       {
        movieData.map(item=>{
          return (
            <MovieCard
            image={item.img}
            name={item.title}
            date={item.date}
            point={item.point}
          ></MovieCard>
          )
        })
       }
           
          
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
