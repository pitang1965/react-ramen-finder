import React, { Fragment } from 'react'

const Photo = ({ url }) => {
  console.log(`● ${url}`);
  return (
    <Fragment>
      <div className='card'>
        <div className='all-center'>
          <img
            src={url}
            alt=''
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Photo
