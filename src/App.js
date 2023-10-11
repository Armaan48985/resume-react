import {FaAngleDoubleRight} from 'react-icons/fa'
import './App.css';
import { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tabs-project'


function App() {

  const [resume, setResume] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchTours = async () => {
    try{
      const response = await fetch(url)
      const tours = await response.json()     
      setResume(tours)
      setLoading(false)     
    }catch{
      setLoading(true)
    }
  }
 
  useEffect(() => {
    fetchTours()
  }, [])

  console.log(resume.id)

  if(loading){
    return(
      <div className='loading'>
        <h1>Loading....</h1>
      </div>
    )
  }

  const {company, dates, duties, title, order} = resume[value]

  console.log(resume)

  return (
    <div className='section'>
      <div className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
      <div className="btn-container">
          {resume.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>

        <div className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </div>
      </div>

      <button className='btn'>more info</button>
    </div>
  );
}

export default App;
