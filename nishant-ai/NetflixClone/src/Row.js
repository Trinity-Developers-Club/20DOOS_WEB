import React, { useState, useEffect } from "react";
import axios from "axios";
import Youtube from 'react-youtube'; 
import movieTrailer from 'movie-trailer';

import "./Row.css";

function Row(props) {
  const url = "https://api.themoviedb.org/3" + props.fetchUrl;
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [url]); // if [], run once when row loads, and dont run again => if passed something, run everytime the "passed parameter" changes

  const optns = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.name || "").then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(e => console.log(e));
    }
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={optns} />}

    </div>
  );
}

export default Row;
