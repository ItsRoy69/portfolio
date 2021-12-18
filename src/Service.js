import React from 'react'
import "./Service.css";

function Service() {
  return (
    <div className="service component__space">
      <div className="heading">
          <h1 className="heading">My Awesome Service</h1>
          <p className="heading p__color">There are many variations of passages of Lorem Ipsum available,</p>
          <p className="heading p__color">but the majority have suffered alteration.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="servie__box pointer">
              <div className="icon">

              </div>
              <div className="service__meta">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
