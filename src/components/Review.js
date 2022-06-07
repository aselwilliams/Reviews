import React,{useState} from 'react'
import data from '../data';
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Review() {
    const [index,setIndex] =useState(0)

    const {src, name, position, review} = data[index]

    const checkNumber=(num)=>{
        if(num>data.length-1) return 0;
        if(num<0) return data.length-1
        return num;
    }

const handlePrev=()=>{
    setIndex((index)=>{
        let newIndex= index-1
        return checkNumber(newIndex)
    })
}
const handleNext=()=>{
    setIndex((index)=>{
        let newIndex= index+1
        return checkNumber(newIndex)
    })
}
const handleRandom=()=>{
    let randomNum= Math.floor(Math.random() * data.length);
    if(randomNum===index) randomNum=index+1
    setIndex(checkNumber(randomNum))
}
  return (
    <div className="review-card">
                <div className="img-container">
            <img id="author-img" src={src} alt={name}/>
            <span className='quote-icon'>
          <FaQuoteRight />
        </span>
        </div>
        <main>
            <h2 id="author">{name}</h2>
            <p id="job-title" className="blue">{position}</p>
            <p id="review">{review}</p>
        </main>
        <section className="btn-wrapper">
            <div className="row">
            <button id="prev-btn" onClick={handlePrev}>
                <FaChevronLeft />
            </button>
            <button id="next-btn" onClick={handleNext}>
                <FaChevronRight />
            </button>
            </div>
            <div className="row">
            <button id="random-btn" onClick={handleRandom}>Surprise Me</button>
            </div>
        </section>
    </div>
  )
}

export default Review