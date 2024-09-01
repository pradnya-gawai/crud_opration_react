import React from 'react'

function JobTitle(props) {
  return (
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
  )
}

export default JobTitle
