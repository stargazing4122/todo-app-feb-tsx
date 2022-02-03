import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const handleClickLogout = () => {
    history.replace('/login');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        APP
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/todos"
            >
              Todos
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="navbar-text text-info me-3"> UserName </span>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleClickLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
