import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector , useDispatch } from 'react-redux'
import { removeFromCart ,increaseQuanntity,decreaseQuantity,checkout} from '../redux/Slices/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {

  const {cart}=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()

  return (
    <>
      <div className='container-fluid p-4'>
        <Row>
          <Col sm={12} md={12} lg={9}>
          {
            cart.length>0 ?
            <table className='table  w-100 table-bodered border border-3 border-dark text-center '>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map(item=>(
                  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.thumbnail} alt="" width={"150px"} />
                  </td>
                  <td>{item.price}</td>
                  <td>
                  <button className='btn' onClick={()=>{dispatch(decreaseQuantity(item.id))}}>-</button>
                    {item.quantity}
                  <button className='btn' onClick={()=>{dispatch(increaseQuanntity(item.id))}}>+</button>
                  </td>
                  <td>
                    <button className='btn ' onClick={()=>{dispatch(removeFromCart(item.id))}}>
                      <i className="fa-solid fa-trash" style={{ color: "#c60606", }} />
                    </button>
                  </td>
                </tr>
                ))
              }
             
            </tbody>
          </table>
          :
          <h3 className='text-center text-danger'>No Products Added</h3>
          }
           
          </Col>
          <Col sm={12} md={12} lg={3}>

            <div className='border rounded shadow p-3 border-3 '>
              <h5>Total Items : {cart?.length} </h5>
              <h5>Total Amount : $ {cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)} </h5>
              <div className='mt-3 d-grid'>
                <button className='btn btn-success' onClick={()=>{dispatch(checkout())}}>checkout</button>
              </div>
            </div>

            <Link className='btn btn-outline-info mt-5' to={'/'}> Shop More</Link>


          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart