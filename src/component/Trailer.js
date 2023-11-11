// Trailer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Youtube from 'react-youtube';

const Trailer = () => {
  const API_KEY = "3be97d6f1d7aa31ffff889715c42966b"; // Replace with your TMDB API key
  const { movieId } = useParams();

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState(null);

  // Define BACKDROP_PATH here
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetchMovieAndTrailer(movieId);
  }, [movieId]);

  const fetchMovieAndTrailer = async (id) => {
    const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: API_KEY,
      }
    });

    const trailerResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
      }
    });

    const trailers = trailerResponse.data.results;
    const officialTrailer = trailers.find(vid => vid.type === "Trailer" && vid.site === "YouTube");

    setMovie(movieResponse.data);
    setTrailer(officialTrailer || trailers[0]);
  };

  const playTrailer = () => {
    setPlaying(true);
  };

  const closeTrailer = () => {
    setPlaying(false);
  };

  return (
    <div>
      {movie && (
        <main>
          <div className="poster" style={{ backgroundImage: `url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
            {playing ? (
              <>
                <Youtube
                  videoId={trailer.key}
                  className="youtube amru"
                  containerClassName="youtube-container amru"
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
                <button onClick={closeTrailer} className="button close-video">Close</button>
              </>
            ) : (
              <div className="center-max-size">
                <div className="poster-content">
                  {trailer ? (
                    <button className="button play-video" onClick={playTrailer} type="button">Play Trailer</button>
                  ) : (
                    'Sorry, no trailer available'
                  )}
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default Trailer;

