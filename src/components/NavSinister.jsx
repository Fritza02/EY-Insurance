import React from "react";
import { Link } from "react-router-dom";
import home from "../img/icons/home.png";
import back from "../img/icons/back.png";

const NavSinister = () => {
  return (
    <header>
      <nav class="navbar navbar-light bg-light">
        <div class="col-md-4 ms-4">
          <Link to={`/home`}>
            <img
              src={back}
              alt=""
              width="30"
              height="24"
              className="mt-3 ml-5 mb-3"
            />
          </Link>
        </div>

        <div class="col-auto me-4">
          <Link to={`/`}>
            <img
              src={home}
              alt=""
              width="30"
              height="24"
              className="mt-3 ml-5 mb-3"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavSinister;