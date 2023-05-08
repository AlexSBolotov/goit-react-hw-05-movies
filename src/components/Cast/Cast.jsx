import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'helpers/movieApi';
// import defaultImage from '../../images/motivation_00.jpg';
import noImage from '../../images/no-image.png';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    movieId &&
      getCreditsById(movieId)
        .then(res => {
          setActors([]);
          setActors(prev => [...prev, ...res.cast]);
        })
        .catch(err => console.log(err));
  }, [movieId]);
  const castMarkup = () => {
    return (
      <ul>
        {actors.map((actor, idx) => (
          <li key={idx}>
            <img
              className={s.image}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                  : noImage
              }
              alt={actor.name}
              loading="lazy"
              width="60"
              height="90"
            ></img>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  };
  return castMarkup();
};

export default Cast;
