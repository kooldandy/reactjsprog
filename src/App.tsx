import React, { Component } from 'react';
import ErrorBoundry from './components/errorboundry/ErrorBoundry';
import Header from './components/header/Header';
import { MovieList } from './components/menulist/MovieList';
import './App.css';
export class App extends Component<unknown, unknown, unknown> {
  public render() {
    return (
      <>
        <div className="App">
          <Header />
          <ErrorBoundry isEveryThingOk={true}>
            <MovieList />
          </ErrorBoundry>
        </div>
      </>
    );
  }
}
