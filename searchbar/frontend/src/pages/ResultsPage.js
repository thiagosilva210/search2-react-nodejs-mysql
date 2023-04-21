import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function ResultsPage() {
  const location = useLocation();
  const searchterm = new URLSearchParams(location.search).get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `http://localhost:3001/api/products/${searchterm}`
      );

      const data = await response.json();
      setSearchResults(data);
    };
    fetchSearchResults();
  }, [searchterm]);

  return (
    <div>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((result) => (
            <div
              className="card mb-5 mx-auto"
              style={{ width: "23rem" }}
              key={result.id}
            >
              <h1>{result.name}</h1>
              <img
                className="card-img-top"
                src={result.image}
                alt="Card img cap"
              />
              <div className="card-body">
                <p className="card-text">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Nenhum resultado foi encontrado</h1>
      )}
    </div>
  );
}
