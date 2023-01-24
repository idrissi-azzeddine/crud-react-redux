import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav className="pt-5">
      <ul className="pt-3 pe-2">
        <li>
          <Link
            to="/list-user"
            className="badge bg1 text-decoration-none text-light"
          >
            <i className="fa-solid fa-users-line"></i>
          </Link>
        </li>
        <li>
          <Link
            to="/ajouter-user"
            className="badge bg2 text-decoration-none text-light"
          >
            <i className="fa-solid fa-user-plus"></i>
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Layout;
