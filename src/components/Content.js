import React from 'react'
import Contentitem from './Contentitem'

const Content = () => {
  return (
    <div className="container-fluid" style={{minHeight:"100px",backgroundColor:"skyblue"}}>
      <div className="container-fluid" >
        <div className="row d-flex justify-content-center">
        <div className='col-sm-4'>
              <Contentitem />
            </div>
            <div className='col-sm-4'>
              <Contentitem />
            </div>
            <div className='col-sm-4'>
              <Contentitem />
            </div>
            <div className='col-sm-4'>
              <Contentitem />
            </div>
            <div className='col-sm-4'>
              <Contentitem />
            </div> 
            <div className='col-sm-4'>
              <Contentitem />
            </div> 


           











          </div>
        </div>
      </div>
    
  )
}

export default Content