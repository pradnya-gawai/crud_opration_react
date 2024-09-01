// InterviewDate.js
import React from 'react'

const InterviewDate = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="interviewDate" className="form-label">
        Interview Date
      </label>
      <input
        type="date"
        className="form-control"
        id="interviewDate"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InterviewDate
