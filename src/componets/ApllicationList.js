// JobTable.js
import React from 'react'
import { jobApplications } from './data' // Adjust the path as needed
import '../css/list.css'

const JobTable = () => {
  return (
    <div
      className="container mt-5 table-responsive"
      style={{ maxHeight: '500px' }}
    >
      <table className="table table-striped table-hover table-bordered sticky-header">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>Application Date</th>
            <th>Status</th>
            <th>Interview Date</th>
            <th>Offer Date</th>
            <th>Notes</th>
            <th colSpan="2">Actions</th> {/* New header for actions */}
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.company}</td>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.applicationDate}</td>
              <td>{job.status}</td>
              <td>{job.interviewDate || '-'}</td>
              <td>{job.offerDate || '-'}</td>
              <td>{job.notes || '-'}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2 "
                  // onClick={() => handleEdit(job.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  // onClick={() => handleDelete(job.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobTable
