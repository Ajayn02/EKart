import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { fetchProductThunk } from '../redux/Slices/productSlice';
import { useSelector,useDispatch  } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../redux/Slices/productSlice';


function Home() {
  const {products,error,loading,currentPage , productPerPage} = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductThunk())
  }, [])

  // console.log(products)

    const totalPages=Math.ceil(products?.length/productPerPage)
    const lastProductIndex=currentPage*productPerPage
    const firstProductIndex=lastProductIndex-productPerPage
    const visibleProducts=products?.slice(firstProductIndex,lastProductIndex)

    const handleNext=()=>{
      if(currentPage<totalPages){
        dispatch(nextPage())
      }
    }

    const handlePrev=()=>{
      if(currentPage>1){
        dispatch(prevPage())
      }
    }

  return (
    <>
      <header className="bg-body-tertiary container-fluid py-1" style={{marginTop:"50px"}}>
        <div className="container-fluid  my-2">
          <div className="text-center text-dark">
            <Carousel fade className='carousel' height={"100%"} width={"100%"}>
              <Carousel.Item>
                <img src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg" alt="img-1" width={"80%"} height={"200px"} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="img-2" width={"80%"} height={"200px"} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="img-1" width={"80%"} height={"200px"} />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {
              loading ?
                <h3>
                  <Spinner animation="border" role="status">
                  </Spinner>
                  <span >Loading...</span>
                </h3>
                :
                (
                  error ?
                    <h3>{error}</h3>
                    :
                    <>
                      {visibleProducts.map(item=>(
                             <div key={item.id} className="col mb-5">
                             <div className="card h-100">
                               <img className="card-img-top" src={item.thumbnail} alt="..." />
                               <div className="card-body p-4">
                                 <div className="text-center">
                                   <h5 className="fw-bolder">{item.title}</h5>
                                   ${item.price}
                                 </div>
                               </div>
                               <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                 <Link className='btn btn-outline-success' to={`/view/${item.id}`} >View More</Link>
                               </div>
                             </div>
                           </div>
                      ))}
                    </>
                    

                )

            }

          </div>
        </div>
      </section>
            {/* pagination */}
            <div className='mt-4 d-flex justify-content-center'>
                <div>
                  <button className='btn' onClick={handlePrev}>
                    <i className="fa-solid fa-angles-left" />
                  </button>
                  {' '}
                    {currentPage }/{totalPages}
                  {" "}
                  <button className='btn' onClick={handleNext}  >
                    <i className="fa-solid fa-angles-right" />
                  </button>
                </div>
            </div>
    </>
  )
}

export default Home