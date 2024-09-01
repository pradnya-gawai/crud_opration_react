import React from 'react'

function CompanyName(props) {
  return (
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
  )
}

export default CompanyName
