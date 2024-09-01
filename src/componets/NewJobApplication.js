import React from 'react'

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
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="TechCorp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="jobTitle" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                placeholder="Frontend Developer"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="New York, NY"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="applicationDate" className="form-label">
                Application Date
              </label>
              <input
                type="date"
                className="form-control"
                id="applicationDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select id="status" className="form-select">
                <option value="">Choose...</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview Scheduled</option>
                <option value="offer">Offer Received</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="interviewDate" className="form-label">
                Interview Date
              </label>
              <input type="date" className="form-control" id="interviewDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="offerDate" className="form-label">
                Offer Date
              </label>
              <input type="date" className="form-control" id="offerDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                className="form-control"
                id="notes"
                rows="3"
                placeholder="Additional notes"
              ></textarea>
            </div>
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
