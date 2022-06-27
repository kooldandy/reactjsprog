import React, { Component } from 'react';
import ErrorBoundry from './components/errorboundry/ErrorBoundry';
import { Header } from './components/header/Header';
import { MovieList } from './components/menulist/MovieList';
import './App.css';
import { CallBackTypesEnum } from './enum';
import { AddMoviePopUp } from './components/addmovie/AddMovie';
import { EditMoviePopUp } from './components/editMovie/EditMovie';
import { DeleteMoviePopUp } from './components/deleteMovie/DeleteMovie';
import { MovieDetails } from './components/movieDetails/MovieDetails';
import { IMovieCard } from './interface';

type AppState = {
  isEveryThingOk: boolean;
  showAddMovie: boolean;
  editMovie: boolean;
  deleteMovie: boolean;
  showMovieDetails: boolean;
  movieDetails: IMovieCard;
};
export class App extends Component<unknown, AppState, unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isEveryThingOk: true,
      showAddMovie: false,
      editMovie: false,
      deleteMovie: false,
      showMovieDetails: false,
      movieDetails: {
        id: '',
        overview: '',
        poster_path: '',
        title: '',
      },
    };

    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  callBack = (
    param: boolean,
    typeOfCb: CallBackTypesEnum,
    movieDetails?: IMovieCard | any
  ) => {
    const state: AppState = this.state;
    if (typeOfCb === CallBackTypesEnum.ISEVERYTHINGOK) {
      state.isEveryThingOk = param;
    } else if (typeOfCb === CallBackTypesEnum.SHOWADDMOVIE) {
      state.showAddMovie = param;
    } else if (typeOfCb === CallBackTypesEnum.EDITMOVIE) {
      state.editMovie = param;
    } else if (typeOfCb === CallBackTypesEnum.DELETEMOVIE) {
      state.deleteMovie = param;
    } else if (typeOfCb === CallBackTypesEnum.SHOWMOVIEDETAILS) {
      state.showMovieDetails = param;
      state.movieDetails = movieDetails;
    }

    this.setState({ ...state });
  };

  handleChildUnmount(typeOfPopUp: CallBackTypesEnum) {
    this.callBack(false, typeOfPopUp);
  }

  private getModal() {
    if (this.state.showAddMovie) {
      return (
        <AddMoviePopUp
          unmountMe={this.handleChildUnmount}
          typeOfPopUp={CallBackTypesEnum.SHOWADDMOVIE}
        ></AddMoviePopUp>
      );
    } else if (this.state.editMovie) {
      return (
        <EditMoviePopUp
          unmountMe={this.handleChildUnmount}
          typeOfPopUp={CallBackTypesEnum.EDITMOVIE}
        ></EditMoviePopUp>
      );
    } else if (this.state.deleteMovie) {
      return (
        <DeleteMoviePopUp
          unmountMe={this.handleChildUnmount}
          typeOfPopUp={CallBackTypesEnum.DELETEMOVIE}
        ></DeleteMoviePopUp>
      );
    }
  }

  public render() {
    const modalPopUp = this.getModal();
    const header = !this.state.showMovieDetails ? (
      <Header showAddMovieCB={this.callBack}></Header>
    ) : null;
    const movieDetails = this.state.showMovieDetails ? (
      <MovieDetails
        movieDetails={this.state.movieDetails}
        eventCallBack={this.callBack}
      ></MovieDetails>
    ) : null;

    return (
      <>
        <div className="App">
          {header}
          {modalPopUp}
          {movieDetails}
          <ErrorBoundry isEveryThingOk={this.state.isEveryThingOk}>
            <MovieList
              isEveryThingOkCB={this.callBack}
              eventCallBack={this.callBack}
            />
          </ErrorBoundry>
        </div>
      </>
    );
  }
}
