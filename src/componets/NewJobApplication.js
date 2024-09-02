import React, { useState } from 'react'
import CompanyName from './CompanyName'
import JobTitle from './JobTitle'
import Notes from './Notes'
import OfferDate from './OfferDate'
import InterviewDate from './InterviewDate'
import Status from './Status'
import ApplicationDate from './ApplicationDate'
import Location from './Location'
import { intialFromData } from './helper'
import { AddNewApplication } from './CrudOpetations'
import { jobApplications } from './data'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const NewJobApplication = ({ data, setData }) => {
  const [formData, setFormData] = useState(intialFromData)
  console.log(formData, 'formData?.title')
  const handleInputChange = (event) => {
    console.log(event, 'event')
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    AddNewApplication(formData, jobApplications, setData)
    const offcanvasElement = document.getElementById('offcanvasNewJob')
    if (offcanvasElement) {
      // Ensure bootstrap is available
      const Bootstrap = window.bootstrap
      if (Bootstrap) {
        offcanvasElement.classList.remove('show')
        offcanvasElement.classList.add('hide')
        const backdropElement = document.querySelectorAll('.offcanvas-backdrop')
        if (backdropElement) {
          backdropElement.forEach((element) => {
            element.classList.remove('show')
            element.classList.add('hide')
          })
        }
      } else {
        console.error('Bootstrap is not loaded.', 'boot')
      }
    } else {
      console.error('Offcanvas element not found.', 'boot')
    }
  }

  return (
    <div>
      {/* Button to trigger the offcanvas */}

      {/* Offcanvas Component */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNewJob"
        aria-labelledby="offcanvasNewJobLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNewJobLabel">
            Add New Job
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <CompanyName
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <JobTitle
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <Location formData={formData} />
            <ApplicationDate formData={formData} />
            <Status formData={formData} />
            <InterviewDate formData={formData} />
            <OfferDate formData={formData} />
            <Notes formData={formData} />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewJobApplication
