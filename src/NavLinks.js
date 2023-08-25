import { Link, Outlet } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className="container m-4 p-3 text-center">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/currency">
            Currency
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/language">
            Language
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/capitalcity">
            Capital City
          </Link>
        </li>
      </ul>

      <Outlet />
          </div>
  );
};

export default Navlinks;
