// OfferDate.js
import React from 'react'

const OfferDate = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="offerDate" className="form-label">
        Offer Date
      </label>
      <input
        type="date"
        className="form-control"
        id="offerDate"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default OfferDate
