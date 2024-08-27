import React from 'react'

function ProductSkeleton() {
  return (
    <div className='products-list-container-skeleton'>
      <div className="product">
        <div className="img"></div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
      <div className="product">
        <div className="img"></div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
      <div className="product">
        <div className="img"></div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
