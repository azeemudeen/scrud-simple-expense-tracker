import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light p-2">
        <div className="container-fluid gap-3">
          <span className="navbar-brand ms-4 fw-bold">XPENZ</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse text-center-sm" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <NavLink className={'nav-link'} exact="true" to="/"><i className="fa fa-home pe-1" aria-hidden="true"></i>
                  Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={'nav-link'} exact="true" to="/categories"><i className="fa fa-th-list pe-1" aria-hidden="true"></i>
                  Categories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={'nav-link'} exact="true" to="/reports"><i className="fa fa-pie-chart pe-1" aria-hidden="true"></i>
                  Reports</NavLink>
              </li>
            </ul>
            {/* <div className="text-end">MODE</div> */}
          </div>
        </div>

      </nav >
    </div >
  )
}

export default NavBar