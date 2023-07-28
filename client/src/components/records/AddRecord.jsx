import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../App";

function AddRecord() {

  const { categories, setRecords } = useContext(AppContext);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Credit');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDesc(desc === '' ? '-' : desc);
    setRecords(rec => {
      const newRec = [...rec, { title, desc, amount, date, category, type }]
      localStorage.setItem("records", JSON.stringify(newRec));
      return newRec;
    });
  }

  return (
    <div className={"card mb-3 p-2 shadow " + (type == 'Credit' ? "bg-success" : "bg-danger")}>
      <div className="text-start fw-bold p-2 text-light">
        Add Transaction
      </div>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="d-md-flex gap-2 flex-md-row flex-column">
          <input
            className='form-control mt-2'
            value={title} onChange={e => setTitle(e.target.value)}
            type="text" required placeholder='Title' />
          <input
            className='form-control mt-2'
            value={desc} onChange={e => setDesc(e.target.value)}
            type="text" placeholder='Description' />
          <div className="input-group mt-2">
            <span className="input-group-text">₹</span>
            <input
              className='form-control'
              value={amount} onChange={e => setAmount(e.target.value)}
              type="number" required placeholder='Amount' />
          </div>
          <div className="input-group mt-2">
            <input
              className='form-control'
              value={date} onChange={e => setDate(e.target.value)}
              type="date" required />
          </div>
          <select className="form-select mt-2"
            value={type} onChange={e => setType(e.target.value)} required>
            <option className="text-success" value="Credit">Credit</option>
            <option className="text-danger" value="Debit">Debit</option>
          </select>
          <select className="form-select mt-2" defaultValue={'default'} onChange={e => setCategory(e.target.value)} required>
            <option value='default' disabled={true} hidden={true}>Please Choose...</option>
            {
              categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)
            }
          </select>
          <button className="btn btn-primary col-md-1 col-sm-12 col-12 mt-2" type="submit">
            <i className="fa fa-plus pe-2" aria-hidden="true"></i>Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecord;
