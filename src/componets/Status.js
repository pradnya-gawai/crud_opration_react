// Status.js
import React from 'react'

const Status = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="status" className="form-label">
        Status
      </label>
      <select
        id="status"
        className="form-select"
        value={value}
        onChange={onChange}
      >
        <option value="">Choose...</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview Scheduled</option>
        <option value="offer">Offer Received</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  )
}

export default Status
