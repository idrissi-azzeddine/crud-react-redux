import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modifierUser } from "../Config/actions";
import { useNavigate } from "react-router-dom";

const ModifierUser = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) =>
    state.user.find((u) => u.id === parseInt(id, 10))
  );
  const [Form, SetForm] = useState({
    id: id,
    nom: users.nom,
    prenom: users.prenom,
    tele: users.tele
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    SetForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      modifierUser({
        id: id,
        nom: Form.nom,
        prenom: Form.prenom,
        tele: Form.tele
      })
    );
    navigation("/list-user");
  };
  return (
    <div className="Azz">
      <form className="d-flex justify-content-center align-items-center flex-column">
        <div className="w-100 text-star d-flex justify-content start align-items-start">
          <label> Nom </label>
        </div>
        <input
          type="text"
          placeholder="votre nom"
          name="nom"
          value={Form.nom}
          onChange={handleChange}
        />
        <br /> <br />
        <div className="w-100 text-star d-flex justify-content start align-items-start">
          <label> Prenom </label>
        </div>
        <input
          type="text"
          placeholder="votre prenom"
          name="prenom"
          value={Form.prenom}
          onChange={handleChange}
        />
        <br /> <br />
        <div className="w-100 text-star d-flex justify-content start align-items-start">
          <label> Tele </label>
        </div>
        <input
          type="text"
          placeholder="votre email"
          name="tele"
          value={Form.tele}
          onChange={handleChange}
        />
        <br /> <br />
        <button
          type="submit"
          className="badge text-light bg3"
          onClick={handleClick}
        >
          <i className="fa-solid fa-user-check"></i>
        </button>
      </form>
    </div>
  );
};

export default ModifierUser;
