import React, { Component } from 'react';
import './MovieCard.css';

export interface IMovieCard {
  title: string;
  overview: string;
  id: string;
  poster_path?: string;
}

export class MovieCard extends Component<IMovieCard, unknown, unknown> {
  constructor(props: IMovieCard) {
    super(props);
  }

  render() {
    const { title, poster_path } = this.props;
    return (
      <div className="movie-card">
        <h3>{title}</h3>
        {/* <p>{overview}</p> */}
        <img src={poster_path} alt="" className="poster" />
      </div>
    );
  }
}
