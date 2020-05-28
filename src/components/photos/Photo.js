import React, { Fragment } from 'react'

const Photo = ({ url }) => {
  console.log(`● ${url}`);
  return (
    <Fragment>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={url}
            // className='round-img'
            alt=''
            style={{ width: 'auto' }}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Photo
