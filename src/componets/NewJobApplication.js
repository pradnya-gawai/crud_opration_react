import React from 'react'
import CompanyName from './CompanyName'
import JobTitle from './JobTitle'
import Notes from './Notes'
import OfferDate from './OfferDate'
import InterviewDate from './InterviewDate'
import Status from './Status'
import ApplicationDate from './ApplicationDate'
import Location from './Location'

const NewJobApplication = () => {
  return (
    <div>
      {/* Button to trigger the offcanvas */}

      {/* Offcanvas Component */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNewJob"
        aria-labelledby="offcanvasNewJobLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNewJobLabel">
            Add New Job
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form>
            <CompanyName />
            <JobTitle />
            <Location />
            <ApplicationDate />
            <Status />
            <InterviewDate />
            <OfferDate />
            <Notes />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewJobApplication
