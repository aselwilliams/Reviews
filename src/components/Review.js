import React,{useState} from 'react'
import data from '../data';
import {FaQuoteRight} from 'react-icons/fa'

function Review() {
    const [index,setIndex] =useState(0)

    const {id, src, name, position, review} =data[index]
  return (
    <div class="review-card">
                <div class="img-container">
            <img id="author-img" src={src} alt="reviewer" />
            <span className='quote-icon'>
          <FaQuoteRight />
        </span>
        </div>
        <main>
            <h2 id="author">{name}</h2>
            <p id="job-title" class="blue">{position}</p>
            <p id="review">{review}</p>
        </main>
        <section class="btn-wrapper">
            <div class="row">
            <button className="prev-btn">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button id="next-btn">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            </div>
            <div class="row">
            <button id="random-btn">Surprise Me</button>
            </div>
        </section>
    </div>
  )
}

export default Review