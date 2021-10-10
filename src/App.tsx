import React, { Component } from 'react';
import ErrorBoundry from './components/errorboundry/ErrorBoundry';
import { Header } from './components/header/Header';
import { MovieList } from './components/menulist/MovieList';
import './App.css';
import { CallBackTypesEnum } from './enum';
import { AddMoviePopUp } from './components/addmovie/AddMovie';
import { EditMoviePopUp } from './components/editMovie/EditMovie';
import { DeleteMoviePopUp } from './components/deleteMovie/DeleteMovie';

type AppState = {
  isEveryThingOk: boolean;
  showAddMovie: boolean;
  editMovie: boolean;
  deleteMovie: boolean;
};
export class App extends Component<unknown, AppState, unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isEveryThingOk: true,
      showAddMovie: false,
      editMovie: false,
      deleteMovie: false,
    };

    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  callBack = (param: boolean, typeOfCb: CallBackTypesEnum) => {
    const state: AppState = this.state;
    if (typeOfCb === CallBackTypesEnum.ISEVERYTHINGOK) {
      state.isEveryThingOk = param;
    } else if (typeOfCb === CallBackTypesEnum.SHOWADDMOVIE) {
      state.showAddMovie = param;
    } else if (typeOfCb === CallBackTypesEnum.EDITMOVIE) {
      state.editMovie = param;
    } else if (typeOfCb === CallBackTypesEnum.DELETEMOVIE) {
      state.deleteMovie = param;
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

    return (
      <>
        <div className="App">
          <Header showAddMovieCB={this.callBack}></Header>
          {modalPopUp}
          <ErrorBoundry isEveryThingOk={this.state.isEveryThingOk}>
            <MovieList
              isEveryThingOkCB={this.callBack}
              amendMovieCB={this.callBack}
            />
          </ErrorBoundry>
        </div>
      </>
    );
  }
}
