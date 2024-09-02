import './App.css'
import { useState } from 'react'
//  this is use for add the bootstap styles
// this import use for enabling the javascript functionality  from bootstap element
import Header from './componets/Header'
import NewJobApplication from './componets/NewJobApplication'
import JobTable from './componets/ApllicationList'
import { jobApplications } from './componets/data'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min' // Import Bootstrap JS

function App() {
  const [data, setData] = useState(jobApplications)
  console.log(window.bootstrap)

  return (
    <div className="container">
      <Header />
      <NewJobApplication data={data} setData={setData} />
      <JobTable data={data} setData={setData} />
    </div>
  )
}

export default App
