import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid px-5 py-5 bg-body-tertiary'>
        <Row>
          <Col md={6} sm={12} >
            <h3>E-Kart</h3>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fuga in possimus eveniet debitis impedit id veniam sed labore, magni quis repudiandae quos quidem doloribus nobis molestiae voluptatem libero nulla.</p>
          </Col>
          <Col md={2} sm={12} >
            <h3>Links</h3>
            <div className='d-flex ' style={{ flexDirection: "column" }}>
              <Link to={'/'} className='mb-2' style={{ textDecoration: "none" }}>Home</Link>
              <Link to={'/wish'} className='mb-2' style={{ textDecoration: "none" }}>Wishlist</Link>
              <Link to={'/cart'} className='mb-2' style={{ textDecoration: "none" }}>Cart</Link>
            </div>
          </Col>
          <Col md={4} sm={12} >
            <div className='w-75'>
              <h3 className='mb-2'>Feedback</h3>
              <textarea name="" id="" className='form-control mb-2' placeholder='Add Your Feedback'></textarea>
              <button className='btn btn-success'>Send</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer