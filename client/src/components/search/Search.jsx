import { useState } from "react";

function Search() {
  const [keyword, setKeyword] = useState("");
  const filter = () => {
    console.log(keyword.toString());
  }
  return (
    <div className='d-md-flex mb-3 gap-2'>
      <input value={keyword} onChange={e => setKeyword(e.target.value)} className='form-control mt-2' type="text" placeholder='Enter text'/>
      <button className="btn btn-primary col-md-1 col-sm-12 col-12 mt-2" onClick={filter}> <i className="fa fa-filter pe-2" aria-hidden="true"></i>
      Filter</button>
    </div>
  )
}

export default Search