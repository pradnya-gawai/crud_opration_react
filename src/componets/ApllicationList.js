// JobTable.js
import React, { useEffect } from 'react'
import '../css/list.css'

const JobTable = ({ data, setData }) => {
  useEffect(() => {
    setData(data)
  }, [data])
  console.log(data, 'data')
  return (
    <div
      className="container mt-5 table-responsive"
      style={{ maxHeight: '550px' }}
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
          {data?.map((job) => (
            <tr key={Math.random()}>
              <td>{job.id}</td>
              <td>{job.company}</td>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>
                {job.applicationDate
                  ? new Date(job.applicationDate).toLocaleDateString()
                  : '-'}
              </td>
              <td>{job.status}</td>
              <td>
                {job.interviewDate
                  ? new Date(job.interviewDate).toLocaleDateString()
                  : '-'}
              </td>
              <td>
                {job.offerDate
                  ? new Date(job.offerDate).toLocaleDateString()
                  : '-'}
              </td>
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
