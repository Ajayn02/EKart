import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishList } from '../redux/Slices/wishSlice'
import { addToCart } from '../redux/Slices/cartSlice'

function Wish() {

  const { items } = useSelector((state) => state.wishReducer)
  // console.log(items)
  const dispatch=useDispatch()

  const handleAddtoCart=(data)=>{
        dispatch(addToCart({...data}))
        dispatch(removeFromWishList(data.id))
  }

  return (
    <>
      <h2 className='text-center py-4'>Wishlist</h2>
      <div className='container-fluid row p-5' style={{ minHeight: "90vh" }}>

        {
          items?.length>0 ?
          items.map(wish=>(
            <div key={wish.id} className="col-3 p-3">
            <div className="card ">
              <img className="card-img-top" src={wish.thumbnail} alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{wish.title}</h5>
                  ${wish.price}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <button className='btn btn-outline-danger me-3' onClick={()=>{dispatch(removeFromWishList(wish.id))}}>
                  <i className="fa-solid fa-heart-circle-xmark fa-lg" style={{color: "#c52216",}} />
                </button>
                <button className='btn btn-outline-success' onClick={()=>{handleAddtoCart(wish)}} >
                <i className="fa-solid fa-cart-plus" style={{color: "#63E6BE",}} /> 
                </button>
              </div>
            </div>
          </div>
          ))
         
        :
        <h3 className='text-danger text-center'>No item Added Yet!!</h3>
        }

       
      </div>
    </>
  )
}

export default Wish