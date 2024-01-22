import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'

function Student_details() {
    var {stdID} = useParams()
    var stdDetails = Data.find((std)=>std.id==stdID)
  return (
    <>
      <h1 className='bg-white text-primary'>Student Details - {stdID}</h1>
      <div className="container">
        <div className="row bg-white mb-3">
            <div className="col-2">
                <img src={stdDetails.image} alt=""  className='my-3'/>
            </div>
            <div className="col-6">
                <h3 className='text-danger mt-3'>ID : {stdDetails.id}</h3>
                <h6>Name: {stdDetails.names}</h6>
                <h6>Faculty: {stdDetails.Faculty}</h6>
                <h6>Address: {stdDetails.Address}</h6>
                <h6>Mobile: {stdDetails.Mobile_no}</h6>
            </div>
        </div>
        <div className="row bg-white mb-3">
    <h4>Fee Details</h4>
    </div>
      </div>
    </>
  )
}

export default Student_details
