import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

export interface IMovieCard {
  title: string;
  overview: string;
  id: string;
  poster_path: string;
}

const moviecardPropTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

type MovieCardTypes = PropTypes.InferProps<typeof moviecardPropTypes>;

export class MovieCard extends Component<MovieCardTypes, unknown, unknown> {
  constructor(props: MovieCardTypes) {
    super(props);
  }

  render() {
    const { title, poster_path } = this.props;
    return (
      <div className="movie-card">
        <h3>{title}</h3>
        <img src={poster_path} alt="" className="poster" />
      </div>
    );
  }
}
