import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Diabetes from "./Diabetes";
import SearchDrugs from "./SearchDrugs";
import Landing from "./Landing";
import DrugPage from "./DrugPage";


export default function App() {
  const handleSubmit = (searchInput) => {
    console.log(searchInput);
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Landing>
                <Outlet />
              </Landing>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/diabetes"
            element={
              <>
                <Header />
                <Diabetes />
                <Footer />
              </>
            }
          />
          <Route
            path="/drugs"
            element={
              <>
                <Header />
                <SearchDrugs />
                <Footer />
              </>
            }
          />
          <Route
            path="/searchDrugs"
            element={
              <>
                <Header />
                <SearchDrugs onSubmit={handleSubmit} />
                <Footer />
              </>
            }
          />
          <Route path="/drugsPage" element={
            <>
            <Header />
            <DrugPage />
            <Footer />
          </>
          }>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}
