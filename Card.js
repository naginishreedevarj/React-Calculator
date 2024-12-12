import React from 'react'

const Card = () => {
  return (
    <div className='maindiv'>
      <div className='div1'>
      <h1>John</h1>
      </div>
      
    
    <div className='div2'>
        <img src='download.jpg' alt="Image" height="200" width="200"/>
        <p>The origins of "John Doe" trace back to English common law. In legal cases involving land ownership, "John Doe" and "Richard Roe" were often used as placeholders in fictitious disputes.</p>
        <span>Posts</span>
        <span>Followers</span>
        <span>Following</span><br></br><br></br>
        <button>Follow</button>
        <button>Message</button>

    </div>
    </div>
  )
}

export default Card
