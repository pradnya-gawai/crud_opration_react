import './App.css'
//  this is use for add the bootstap styles
import 'bootstrap/dist/css/bootstrap.min.css'
// this import use for enabling the javascript functionality  from bootstap element
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './componets/Header'
import NewJobApplication from './componets/NewJobApplication'
import JobTable from './componets/ApllicationList'

function App() {
  return (
    <div className="container">
      <Header />
      <NewJobApplication />
      <JobTable />
    </div>
  )
}

export default App
