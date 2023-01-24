import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ajouterUser } from "../Config/actions";

const AjouterUser = () => {
  const ele = useSelector((state) => state.user.length);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [Form, SetForm] = useState({
    nom: "",
    prenom: "",
    tele: ""
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
      ajouterUser({
        id: ele + 1,
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
          placeholder="votre Tele"
          name="tele"
          value={Form.tele}
          onChange={handleChange}
          className="qa"
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

export default AjouterUser;
