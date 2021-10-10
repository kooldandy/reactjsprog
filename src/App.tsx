import React, { Component } from 'react';
import ErrorBoundry from './components/errorboundry/ErrorBoundry';
import { Header } from './components/header/Header';
import { MovieList } from './components/menulist/MovieList';
import './App.css';
import { CallBackTypesEnum } from './enum';
import { AddMoviePopUp } from './components/addmovie/AddMovie';

type AppState = {
  isEveryThingOk: boolean;
  showAddMovie: boolean;
};
export class App extends Component<unknown, AppState, unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isEveryThingOk: true,
      showAddMovie: false,
    };

    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  callBack = (param: boolean, typeOfCb: CallBackTypesEnum) => {
    const state: AppState = this.state;
    if (typeOfCb === CallBackTypesEnum.ISEVERYTHINGOK) {
      state.isEveryThingOk = param;
    } else {
      state.showAddMovie = param;
    }

    this.setState({ ...state });
  };

  handleChildUnmount() {
    this.setState({ showAddMovie: false });
  }

  public render() {
    const showAddMovieModal = this.state.showAddMovie;
    const modalPopUp = showAddMovieModal ? (
      <AddMoviePopUp unmountMe={this.handleChildUnmount}></AddMoviePopUp>
    ) : null;

    return (
      <>
        <div className="App">
          <Header showAddMovieCB={this.callBack}></Header>
          {modalPopUp}
          <ErrorBoundry isEveryThingOk={this.state.isEveryThingOk}>
            <MovieList isEveryThingOkCB={this.callBack} />
          </ErrorBoundry>
        </div>
      </>
    );
  }
}
