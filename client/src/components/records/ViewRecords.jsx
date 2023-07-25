import { createContext, useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../App";

function Records() {
  const { records, setRecords } = useContext(AppContext);

  const removeRecord = (index) => {
    setRecords(rec => {
      const newRec = rec.filter((r, i) => i != index);
      localStorage.setItem("records", JSON.stringify(newRec));
      return newRec;
    });
    console.log(records);
    console.log(index);
  }
  console.log(records);
  return (
    <div>
      <div className="text-start mb-1 fw-bold p-2">
        Recent Transactions
      </div>
      <div className="table-responsive">
        <table className='table text-start table-hover table-light'>
          <thead className="tale-warning">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th colSpan={2}>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((r, i) =>
                <tr key={i} className={r.type == 'Credit' ? 'table-success' : 'table-danger'} >
                  <td>{r.title}</td>
                  <td>{r.desc}</td>
                  <td>{r.amount}</td>
                  <td>{r.date}</td>
                  <td>{r.type}</td>
                  <td><button onClick={(e) => removeRecord(i)} className="btn btn-close"></button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Records