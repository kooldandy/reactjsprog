import React, { Component } from 'react';
import ErrorBoundry from './components/errorboundry/ErrorBoundry';
import Header from './components/header/Header';
import { MovieList } from './components/menulist/MovieList';
import './App.css';

type AppState = {
  isEveryThingOk: boolean;
};
export class App extends Component<unknown, AppState, unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isEveryThingOk: true,
    };
  }

  callBack = (param: boolean) => {
    console.log(param);
    const state: AppState = this.state;
    state.isEveryThingOk = param;

    this.setState({ ...state });
  };

  public render() {
    return (
      <>
        <div className="App">
          <Header />
          <ErrorBoundry isEveryThingOk={this.state.isEveryThingOk}>
            <MovieList isEveryThingOkCB={this.callBack} />
          </ErrorBoundry>
        </div>
      </>
    );
  }
}
