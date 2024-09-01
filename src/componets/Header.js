import React from 'react'

function Header(props) {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span class="navbar-brand mb-0 h1">Job Application Tracker</span>
          <div className="d-flex w-100 justify-content-end">
            <button
              className="btn btn-primary me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNewJob"
              aria-controls="offcanvasNewJob"
            >
              New Job
            </button>
            <input type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
