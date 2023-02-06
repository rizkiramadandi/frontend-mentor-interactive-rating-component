import { useState } from 'react'

function App() {
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5])
  const [selectedRating, setSelectedRating] = useState(null)
  const [submit, setSubmit] = useState(false)

  return (
    <div>
      <main>
        {submit === false ? (
        <div className="card">
          <div className='rating-icon'>
            <img src="./images/icon-star.svg" alt="Star icon" />
          </div>
          <h1 className='card-title'>How did we do?</h1>
          <p className='card-subtitle'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className='rating'>
            {ratings.map(rating => {
              return (<span className={selectedRating !== rating ? 'rating-button':'rating-button selected'} onClick={() => setSelectedRating(rating)}>{rating}</span>)
            })}
          </div>
          <button className='submit-button' onClick={() => selectedRating !== null ? setSubmit(true) : null}>
            SUBMIT
          </button>
        </div>
        ):(
        <div className='card thank-you'>
          <div className='thank-you-image'>
            <img src="./images/illustration-thank-you.svg" alt="Thank you illustration" />
          </div>
          <div className='your-rating'>
            You selected {selectedRating} out of 5
          </div>
          <h1 className='card-title'>
            Thank you!
          </h1>
          <p className='card-subtitle'>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>
        </div>
        )}
      </main>
      <footer>
          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/rizkiramadandi">Rizki Ramadandi</a>.
          </div>
      </footer>
    </div>
  )
}

export default App
