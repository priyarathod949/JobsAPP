import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const Home = props => {
  const redirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="heading">Find The Job That Fits Your Life</h1>
        <p className="description">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" onClick={redirectToJobs} className="find-jobs">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
