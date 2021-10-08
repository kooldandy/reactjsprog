import React, { Component } from 'react';
import ErrorBoundry from './components/errorboundry/ErrorBoundry';
import { Header } from './components/header/Header';
import { MovieList } from './components/menulist/MovieList';
import './App.css';
import { ModalPopUp } from './components/modal/Modal';
import { CallBackTypesEnum } from './enum';

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
    const showModal = this.state.showAddMovie;
    const modalPopUp = showModal ? (
      <ModalPopUp unmountMe={this.handleChildUnmount}>
        {{
          header: (
            <>
              <p>Add Movies</p>
            </>
          ),
          body: (
            <>
              <p>Body</p>
            </>
          ),
          footer: (
            <>
              <button value="Submit">Submit</button>
            </>
          ),
        }}
      </ModalPopUp>
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
