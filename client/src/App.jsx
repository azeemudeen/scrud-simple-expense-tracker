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
  const [isLoading, setIsLoading] = useState(true);

  const dummyRecords = [
    { title: "Lunch", desc: "-", amount: 80, date: "13/03/2023", category: "FOOD", type: "Debit" },
    { title: "Book", desc: "-", amount: 30, date: "13/03/2023", category: "STATIONARY", type: "Debit" },
    { title: "Salary", desc: "-", amount: 1080, date: "13/03/2023", category: "WORK", type: "Credit" },
    { title: "Sales", desc: "-", amount: 180, date: "13/03/2023", category: "WORK", type: "Credit" }
  ]

  const dummyCat = ["WORK","STATIONARY","FOOD"];

  useEffect(() => {
      const rec = localStorage.getItem("records");
      const cat = localStorage.getItem("categories");
      if (rec) {
        setRecords(JSON.parse(rec));
      }
      if (cat) {
        setCategories(JSON.parse(cat));
      }
      setRecords((rec) => rec.concat(dummyRecords));
      setCategories((cat) => cat.concat(dummyCat));
      setIsLoading(false);
  }, []);

  return (
    <>
      { !isLoading && (
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
      )}
    </>
  )
}

export default App