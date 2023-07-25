import { useEffect, useState } from 'react'
import AddRecord from '../components/records/AddRecord'
import Search from '../components/search/Search'
import ViewRecords from '../components/records/ViewRecords';

function Home() {

  return (
    <>
      <div className='p-5'>
        <AddRecord></AddRecord>
        <div className="card p-2 shadow ">
          <Search></Search>
          <ViewRecords></ViewRecords>
        </div>
      </div>
    </>
  )
}

export default Home