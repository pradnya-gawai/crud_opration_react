import React from 'react'

function JobTitle({ formData, handleInputChange }) {
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
        value={formData.title}
        onChange={handleInputChange}
        name="title"
      />
    </div>
  )
}

export default JobTitle
