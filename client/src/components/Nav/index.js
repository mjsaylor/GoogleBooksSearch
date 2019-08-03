import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        SEARCH FOR BOOKS
      </a>
      <a className="navbar-brand" href="/SavedBooks">
        VIEW READING LIST
      </a>
    </nav>
  );
}

export default Nav;
