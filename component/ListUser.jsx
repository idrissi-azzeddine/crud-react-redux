import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supprimerUser } from "../Config/actions";

const ListUser = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDrop = (id) => {
    dispatch(supprimerUser(id));
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="container-fluid">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => {
            return (
              <tr key={index}>
                <th> {u.id ? u.id : "__"} </th>
                <td> {u.nom ? capitalizeFirstLetter(u.nom) : "__"} </td>
                <td> {u.prenom ? capitalizeFirstLetter(u.prenom) : "__"} </td>
                <td> {u.tele ? u.tele : "__"} </td>
                <td className="d-flex justify-content-evenly align-items-center">
                  <Link to={`/modifier-user/${u.id}`}>
                    <button className="badge bg-warning border-0">
                      <i className="fa-solid fa-user-pen"></i>
                    </button>
                  </Link>
                  <Link>
                    <button
                      className="badge bg-danger border-0"
                      onClick={() => handleDrop(u.id)}
                    >
                      <i className="fa-solid fa-user-xmark"></i>
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
