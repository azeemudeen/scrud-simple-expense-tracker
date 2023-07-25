import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Reports from './pages/Reports';
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const rec = localStorage.getItem("records");
    const cat = localStorage.getItem("categories");
    if (rec) {
      setRecords(JSON.parse(rec));
    }
    if (cat) {
      setCategories(JSON.parse(cat));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <AppContext.Provider value={{ records, setRecords, categories }}>
              <Home />
            </AppContext.Provider>
          } />
          <Route path="/categories" element={
            <AppContext.Provider value={{ categories, setCategories }}>
              <Categories />
            </AppContext.Provider>
          }
          />
          <Route path="/reports" element={
            <AppContext.Provider value={{ records, categories }}>
              <Reports />
            </AppContext.Provider>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App