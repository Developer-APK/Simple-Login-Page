import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>
        <div className='product-image'>
          <img src='images/watch.jpg' alt='wish'/>
        
          <img src='images/watch-1.jpg' alt='wish' style={{width:"300px", margin:"20px"}}/>
        </div>
        <div className='wishlist-icon position-absolute'>
          <Link ><img src='images/wish.svg' alt='image'/></Link>
          </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>
            My application and respective description of this product will be lunched soon
          </h5>
          <ReactStars
    count={5}
    
    size={24}
    isHalf={true}
    value='3.5'
    edit={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
          <p className='price'>1000₹</p>
        </div>
        
        {/* next blok of code */}
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column gap-15'>
            <Link ><img src='images/prodcompare.svg' alt='image'/></Link>
            <Link ><img src='images/view.svg' alt='image'/></Link>
             <Link ><img src='images/add-cart.svg' alt='image'/></Link>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default ProductCard
