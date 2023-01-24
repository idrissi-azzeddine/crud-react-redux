import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AjouterUser from "../component/AjouterUser";
import ListUser from "../component/ListUser";
import ModifierUser from "../component/ModifierUser";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-start position-fixed w-100 align-items-center bg">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
          alt=""
          width="50px"
        />
        <h3 className="fw-bold mt-2"> React redux </h3>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/list-user" element={<ListUser />} />
            <Route path="/ajouter-user" element={<AjouterUser />} />
            <Route path="/modifier-user/:id" element={<ModifierUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
