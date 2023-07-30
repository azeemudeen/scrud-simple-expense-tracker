import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../App";
import './Categories.css'

function Categories() {
  const [newCat, setNewCat] = useState('');
  const { categories, setCategories } = useContext(AppContext);
  const addCategory = () => {
    if (newCat && !categories.includes(newCat)) {
      setCategories((prev) => {
        const cat = [...prev, newCat];
        localStorage.setItem("categories", JSON.stringify(cat));
        setNewCat('');
        return cat;
      });
      console.log(categories);
    }
  }

  const removeCategory = (index) => {
    setCategories((prev) => {
      const cat = prev.filter((val, i) => i != index);
      localStorage.setItem("categories", JSON.stringify(cat));
      return cat;
    })
  }
  return (
    <div className="p-5">
      <div className="container">
        <div className="row gap-3 d-flex flex-wrap">
          <div className="col-md-3 col-sm-6 d-flex flex-row">
            <input type="text" className="form-control rounded-pill rounded-end" placeholder="Add new Category"
              value={newCat} onChange={e => { setNewCat(e.target.value.toUpperCase()) }} onKeyUp={(e) => e.key == 'Enter' ? addCategory() : ''}
            />
            <button className="btn btn-primary rounded-pill rounded-start" onClick={addCategory}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          {
            categories.map((cat, i) => {
              return <div key={i} className="d-flex-inline col-md-3 col-sm-3 bg-primary rounded-pill align-self-center p-2 fw-bold text-white text-center text-truncate shadow">
                <span>{cat}</span> <i onClick={()=> removeCategory(i)} className="fa fa-times-circle pointer" aria-hidden="true"></i>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Categories