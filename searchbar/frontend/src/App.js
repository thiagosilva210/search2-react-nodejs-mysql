import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
