import AddRecord from '../components/records/AddRecord'
import Search from '../components/search/Search'
import ViewRecords from '../components/records/ViewRecords';

function Home() {

  return (
    <>
      <div className='p-5'>
        <AddRecord />
        <div className="card p-2 shadow ">
          <Search />
          <ViewRecords />
        </div>
      </div>
    </>
  )
}

export default Home