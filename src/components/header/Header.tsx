import React, { Fragment } from 'react';
import './Header.css';

export default function Header() {
  return (
    <Fragment>
      <div className="header">
        <span className="header-image"></span>
        <h1 className="header-title">Netfliz Movies</h1>
        <div className="add-movie btn">
          <span className="btn-text">+ Add Movie</span>
        </div>
      </div>
    </Fragment>
  );
}
