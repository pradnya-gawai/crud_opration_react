// Location.js
import React from 'react'

const Location = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="location" className="form-label">
        Location
      </label>
      <input
        type="text"
        className="form-control"
        id="location"
        placeholder="New York, NY"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Location
