import React, {Component} from 'react'

import port from 'images/port'
import eat from 'images/eat'

const hello = () => {
  return (
    <div>
      <div>It's React, bro!</div>
      <div className='shell'>
        <img src={port} className='shell__image' alt='' />
      </div>
      <div className='shell'>
        <img src={eat} className='shell__image' alt='' />
      </div>
    </div>
  )
}

export default hello
