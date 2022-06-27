import { FC, ReactElement, useEffect, useState } from 'react';
import { MovieCard } from '../moviecards/MovieCard';
import PropTypes from 'prop-types';
import './MenuList.css';
import { CallBackTypesEnum } from '../../enum';
import { IMovieCard } from '../../interface';

const movieListPropTypes = {
  isEveryThingOkCB: PropTypes.func.isRequired,
  eventCallBack: PropTypes.func.isRequired,
};

type MovieListTypes = PropTypes.InferProps<typeof movieListPropTypes>;

export const MovieList: FC<MovieListTypes> = ({
  isEveryThingOkCB,
  eventCallBack,
}): ReactElement => {
  const [movieList, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/movies/?limit=12')
      .then((res) => res.json())
      .then((movieList: any) => {
        const _data = movieList.data;
        setData(_data);
        isEveryThingOkCB(true, CallBackTypesEnum.ISEVERYTHINGOK);
      })
      .catch((err: any) => {
        console.error(err);
        isEveryThingOkCB(false, CallBackTypesEnum.ISEVERYTHINGOK);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="menu-list">
      {movieList.map((movie: IMovieCard) => {
        return (
          <MovieCard
            movieDetails={movie}
            key={movie.id}
            eventCallBack={eventCallBack}
          ></MovieCard>
        );
      })}
    </div>
  );
};
