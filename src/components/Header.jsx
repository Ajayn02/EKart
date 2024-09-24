import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchWithkey } from '../redux/Slices/productSlice';

function Header() {

  const {items}=useSelector((state)=>state.wishReducer)
  // console.log(items);
  const {cart}=useSelector((state)=>state.cartReducer)
  // console.log(cart);
  
  const dispatch=useDispatch()

  const [key,setKey]=useState("")

  return (
    <>
      <Navbar className=" py-3 bg-body-tertiary shadow" >
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"} style={{textDecoration:'none',color:"black"}}>
              <i className="fa-solid fa-cart-shopping fa-xl fa-bounce me-2" style={{ color: "#9061d6", }} />
              E-Kart
            </Link>
          </Navbar.Brand>
          <div className='d-flex'>
              <input type="text" className='form-control me-3' onChange={(e)=>{setKey(e.target.value)}} />
              <button className='btn btn-success' onClick={()=>{dispatch(searchWithkey(key))}}>Search</button>
            </div>
          <div>
            
            <Link className='btn border-1 border-dark me-3' to={"/wish"}>
              <i className="fa-solid fa-heart fa-lg me-1" style={{ color: "#c92626", }} />
              Wishlist
              {"  "}
              <span className='badge bg-dark ms-2'>
                {items?.length}
              </span>
            </Link>
            <Link className='btn border-1 border-dark' to={'/cart'}>
              <i className="fa-solid fa-cart-plus fa-lg me-1" style={{ color: "#0a0a0a", }} />
              Cart
              {"  "}
              <span className='badge bg-dark ms-2'>
                {cart?.length}
              </span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header