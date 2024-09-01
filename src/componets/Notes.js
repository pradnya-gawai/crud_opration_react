// Notes.js
import React from 'react'

const Notes = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="notes" className="form-label">
        Notes
      </label>
      <textarea
        className="form-control"
        id="notes"
        rows="3"
        placeholder="Additional notes"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  )
}

export default Notes
