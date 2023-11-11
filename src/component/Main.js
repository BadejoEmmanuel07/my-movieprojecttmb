
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Movie from "./Movie";
import Footer from "./Footer";
import { Logo } from '../images/index';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

function Main() {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + "search/movie";
  const DISCOVER_API = MOVIE_API + "discover/movie";
  const API_KEY = "3be97d6f1d7aa31ffff889715c42966b"; 
  const [playing, setPlaying] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(`${search ? SEARCH_API : DISCOVER_API}`, {
      params: {
        api_key: API_KEY,
        query: search
      }
    });

    setMovies(data.results);
    setMovie(data.results[0]);

    if (data.results.length) {
      await fetchMovie(data.results[0].id);
    }
  }

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos"
      }
    });

    

    setMovie(data);
  }

  const selectMovie = (movie) => {
    fetchMovie(movie.id);
    setPlaying(false);
    setMovie(movie);
    window.scrollTo(0, 0);
  }

  const DisplayMovies = () => (
    movies.map(movie => (
      <Movie
        selectMovie={selectMovie}
        key={movie.id}
        movie={movie}
      />
    ))
      );

      const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
<div>
<div className="App1" style={{ width: "100%" }}>
      <div >
      <div className="header">
  <div className="container">
  
    <img className="" src={Logo} alt="Logo" />

    
    <nav className="nav" ref={navRef}>
      <ul>
        <li>

          <Link to="/home">Movies</Link>
        </li>
        <li>
          <Link to="/pages">TvShow</Link>
        </li>
        <li>
          <Link to="/about">More</Link>
        </li>
      </ul>
      <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
    </nav>
    <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
  </div>
</div>

        
    
        <div className="backimg">
          <div className="back2 pt-4">
            <h1 className="text-white">Welcome.</h1>
            
              <h6 className="text-white">Millions of movies, TV shows, and people to discover. Explore now.</h6>
            
            <form className="form" onSubmit={fetchData}>
              <input className="search" type="text" id="search"placeholder="Search a movie" onInput={(event) => setSearch(event.target.value)} />
              <button className="submit-search" type="submit"><i className="fa fa-search"></i>Search</button>
            </form>
           </div>
        </div>

        <div>
          <div className="movies-display">
            {DisplayMovies()}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Main; 
