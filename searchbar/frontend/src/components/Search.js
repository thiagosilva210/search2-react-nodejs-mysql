import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      document.getElementById("searchInput").focus();
    } else {
      navigate(`/results?query=${searchTerm}`);
    }
  };

  return (
    <div>
      <ul className="mt-5">
        <p style={{ fontSize: "40px" }}>
          Possíveis produtos para serem pesquisados:
        </p>
        <li>
          <h4>Produto 1</h4>
        </li>
        <li>
          <h4>Produto 2</h4>
        </li>
        <li>
          <h4>Produto 3</h4>
        </li>
        <li>
          <h4>Produto 4</h4>
        </li>
      </ul>

      <form className="input-group mb-3 p-5" onSubmit={handleSubmit}>
        <input
          id="searchInput"
          className="form-control"
          type="text"
          placeholder="Pesquise por um produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="input-group-append">
          <button className="btn btn-light btn-outline-dark" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
