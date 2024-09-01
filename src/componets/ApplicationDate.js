// ApplicationDate.js
import React from 'react'

const ApplicationDate = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="applicationDate" className="form-label">
        Application Date
      </label>
      <input
        type="date"
        className="form-control"
        id="applicationDate"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default ApplicationDate
